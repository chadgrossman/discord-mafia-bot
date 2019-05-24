module.exports = message => {
    const author = message.member
    if (author.voiceChannel.name === 'Mafia') {
        if (author.voiceChannel.full === false) {
            message.reply('Waiting on more people to join the voice channel.')
            return
        }
        var random = Math.floor(Math.random() * author.voiceChannel.members.size)
        for (var i = 0; i < author.voiceChannel.members.size; i++) {
            if (i === random) {
                author.voiceChannel.members.array()[i].sendMessage('You have been assinged the role **Mafia**')
            } else {
                author.voiceChannel.members.array()[i].sendMessage('You have been assinged the role **Villager**')
            }
        }
        message.reply('Roles have been sent. Good luck!')
    } else {
        message.reply('Must be in the `Mafia` voice channel to begin.')
    }
}