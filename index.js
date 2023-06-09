require("dotenv").config();
const Discord = require("discord.js")
const {Client, GatewayIntentBits} = require("discord.js")

const TOKEN = process.env.DISCORD_TOKEN;

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
})

client.on("ready", () => {
    console.log(`Logged in as: ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content.toLowerCase().includes("hi") || message.content.toLowerCase().includes("hello")){
        message.reply("Hello, World!");
    }
})

client.login(TOKEN)