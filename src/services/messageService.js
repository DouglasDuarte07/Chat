class MessageService {
    constructor({ messageRepository }) {
        this.messageRepository = messageRepository
    }

    async new(data) {
        this.messageRepository.create(data)
    }
}

module.exports = MessageService