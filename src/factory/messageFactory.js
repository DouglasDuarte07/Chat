const MessageRepository = require('./../repositories/messageRepository')
const MessageService = require('./../services/messageService')

const { join } = require('path')
const filename = join(__dirname, '../../database', 'database.json')

const generateInstance = () => {
    const messageRepository = new MessageRepository({
        file: filename
    })
    const messageService = new MessageService({
        messageRepository
    })

    return messageService
}

module.exports = { generateInstance }