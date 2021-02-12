class Message {
    constructor({ user, message}) {

        this.user = user;
        this.message = message;
        this.date = Date.now();
    }

    isValid() {
        const propertyNames = Object.getOwnPropertyNames(this)
        const amountInvalid = propertyNames
            .map(property => (!!this[property]) ? null : `${property} inválido!`)
            .filter(item => !!item)
            
        return {
            valid: amountInvalid.length === 0,
            error: amountInvalid
        }
    }
}

module.exports = Message