class MessageService {
	constructor({ messageRepository }) {
		this.messageRepository = messageRepository
	}

	new(data) {
		this.messageRepository.new(data)
	}
	async _currentFileContent() { //lê o database e transforma em json
		console.log('enrei')
		return await this.messageRepository._currentFileContent();
	}
  async read(itemId) {
    return await this.messageRepository.read();
  }
}

module.exports = MessageService