//Default config 
const DEFAULT_HEADER = { 'Content-Type': 'application/json' };
const PORT = 3000;
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())


const MessageFactory = require('./factories/messageFactory')
const messageService = MessageFactory.generateInstance()
const Message = require('./entities/message')

const	SUCCESS_REQUEST = 200;
const	BAD_REQUEST = 400;
const	UNAUTHORIZED = 401;

app.post('/send', async (req, res) => {
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

app.get('/read', async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  let {body} = req;
  try{
  	let database = await messageService.read();
  	res.status(SUCCESS_REQUEST).send(database)
	}catch(e){
		res.status(BAD_REQUEST).send({error: e})
	}
})

app.get('/get', async (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`application active in http://localhost:${PORT}`)
})