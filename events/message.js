const rules = require('../commands/rules')
const start = require('../commands/start')

module.exports = (client, message) => {
    if (message.content === '!mafia') {
        return rules(message)
    }
    if (message.content === '!start') {
        start(message)
    }
}