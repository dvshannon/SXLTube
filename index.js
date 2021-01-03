const DiscordJS = require('discord.js');
// const WOKCommands = require('wokcommands')
require('dotenv').config();
const discord = require('discord.js')
const client = new DiscordJS.Client()

client.login(process.env.TOKEN)

client.on('ready', () => {
    console.log('Ready..')
    // new WOKCommands(client)
})




client.on('message', message => {
    if(message.author.bot) return;

    if(message.content.toLowerCase() === '!listen') {
        message.channel.send('collecting')
        let filter = m => !m.author.bot;
        let collector = new discord.MessageCollector(message.channel, filter);
        // let destination = document.getElementById('featured'); TODO: data to DOM
        collector.on('collect', (message, col) => {
            console.log('New post by: ' + message.author.displayAvatarURL + message.author.username + '\nPost:' + message.content)
            // if(destination) {
            //     destination.send(message.content)
            // }
        })
    }
})

