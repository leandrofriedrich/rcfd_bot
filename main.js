// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const battalionchief = "Noah Weber"

// define engine company members
const engine = [
    "Mark Rumpe",
    "Danny Brückner",
    "Leandro Friedrich",
    "Conan Edogawa",
    "Leon Borges",
];

// define trainee members
const trainee = [
    "Markus Schnitzel",
    "Jonas Müller",
    "Jojo Cruz",
];

// define ladder company members
const ladder = [
    "Daniel Brückner",
    "Fabian LE",
];

// define lieutenant and capitain for "Zugführer"
const zugführer = [
	"Leon Borges",
	"Daniel Brückner",
	"Fabian LE",
	"Noah Weber",
]
const { MessageAttachment, MessageEmbed } = require('discord.js');

// other stuff thats needed
let currentDate = new Date()
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let datum = cDay + "/" + cMonth + "/" + cYear


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'invite') {
		await interaction.reply(`https://leandrofriedrich.de/rcfdbot`)
	} else if (commandName == "dienstplan") {
		// randomize engine
		const Engine1 = Math.floor(Math.random() * engine.length);
		const Engine2 = Math.floor(Math.random() * engine.length);

		// randomize trainee
		const Trainee1 = Math.floor(Math.random() * trainee.length);
		const Trainee2 = Math.floor(Math.random() * trainee.length);
		const Trainee3 = Math.floor(Math.random() * trainee.length);
		
		// randomize ladder
		const Ladder1 = Math.floor(Math.random() * ladder.length);
		const Ladder2 = Math.floor(Math.random() * ladder.length);

		// randomize zugführer
		const Zugführer1 = Math.floor(Math.random() * zugführer.length);
		const Zugführer2 = Math.floor(Math.random() * zugführer.length);

		interaction.reply(`Dienstplan am ${datum}:
		👨‍💼 Battalion Chief: ${battalionchief}
		📋 Zugführer: ${zugführer[Zugführer1]}
		Stellvertretender Zugführer: ${zugführer[Zugführer2]}
		
		⚙️ Engine Company: ${engine[Engine1]}, ${engine[Engine2]} 
		🪜 Ladder Company: ${ladder[Ladder2]}, ${ladder[Ladder2]}
		
		🎓 Trainee: ${trainee[Trainee1]}, ${trainee[Trainee2]}, ${trainee[Trainee3]}`);
	};
});

// Login to Discord with your client's token
client.login(token);