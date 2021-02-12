//Default config
const PORT = 3000;
const express = require('express');
const app = express();

//Convert req and res to json
const bodyParser = require('body-parser');
app.use(bodyParser.json())

//NextJS config
const next = require('next')
const dev = process.env.NODE_ENV !== 'production';
const aplicationNext = next({ dev });
const handle = aplicationNext.getRequestHandler();

//POO API
const MessageFactory = require('./factories/messageFactory')
const messageService = MessageFactory.generateInstance()
const Message = require('./entities/message')

//Codes for request
const	SUCCESS_REQUEST = 200;
const	BAD_REQUEST = 400;
const	UNAUTHORIZED = 401;

//Initializing Application
aplicationNext.prepare().then(() => {

	app.post('/send', async (req, res) => {//Route for send message
	  res.setHeader('Content-Type', 'application/json')
	  let {body} = req;
	  try{
			let data = new Message(body);

			if(data.isValid()){
				messageService.new(data);
			  res.status(SUCCESS_REQUEST).send(data);
			}else
			  res.status(BAD_REQUEST).send(data);

		}catch(e){
			res.status(BAD_REQUEST).send({error: e})
		}
	})

	app.get('/read', async (req, res) => {//Rout for read message
	  res.setHeader('Content-Type', 'application/json')
	  try{
	  	let database = await messageService.read();
	  	res.status(SUCCESS_REQUEST).send(database)
		}catch(e){
			res.status(BAD_REQUEST).send({error: e})
		}
	})

  app.get('*', (req, res) => {//Routes for pages in app Nextjs
    return handle(req, res)
  })
    
  app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Start in http://localhost:${PORT}`)
  })

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})