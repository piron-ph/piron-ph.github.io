/** @format */

console.clear();

const Discord = require("discord.js");

const config = require("./Data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.on("ready", () => console.log("Bot is online!"));

client.on("messageCreate", message => {
	// console.log(message.content);

	if (message.content == "hello") message.reply("Hello!");
});

client.login(config.token);
