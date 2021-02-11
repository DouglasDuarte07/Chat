const { readFile, writeFile } = require('fs/promises');

class MessageRepository {
  constructor({ file }) { //Constrói o objeto
    this.file = file
  }

  async _currentFileContent() { //lê o database e transforma em json
    return JSON.parse(await readFile(this.file));
  }

  async new(data) {
    const currentFile = await this._currentFileContent();
    currentFile.push(data);

    await writeFile(this.file, JSON.stringify(currentFile));
  }

  async remove(itemId) {

  }
}

module.exports = messageRepository