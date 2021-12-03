console.clear();

const Discord = require("discord.js");

const config = require("./Data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents });

client.on("ready", () => console.log("Hersa is now online, status rest. on value"));

client.on("messageCreate", message => {
	// console.log(message.content);

	if (message.content == "Welcome!") message.reply("Hello!");
	if (message.content == "Who are you?") message.reply("I Am HERSA, your personal assistant.");
	if (message.content == "Who made you?") message.reply("I was created By Ligolas Neo Malicdem");
	if (message.content == "Why are you here?") message.reply("To create destroy life.");
	if (message.content == "how old are you?") message.reply("I am now 3 Years old");
	if (message.content == "Do you know my name?") message.reply("Yes.");
	if (message.content == "What is my name?") message.reply("Ashey");
	if (message.content == "") message.reply("I cant understand.");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
	if (message.content == "") message.reply("");
});

client.login(config.token);
