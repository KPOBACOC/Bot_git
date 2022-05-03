const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js'); 
const {token} = require('./botconfig.json'); 

const bot = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] 
});


bot.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(`[TEST] - ${file}`)
    // Set a new item in the Collection
	// With the key as the command name and the value as the exported module
    bot.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles){
    const event = require(`./events/${file}`);
    if (event.once){
        bot.once(event.name, (...args) => event.execute(...args));
    } else {
        bot.on(event.name, (...args) => event.execute(...args));
        console.log(`[EVENTS DONWL] - Загрузился ${event.name}`)
    }
}


//команда, и то, что она должна выполнить

bot.on('interactionCreate', async interaction => {
    //проверка на существования команды.
	if (!interaction.isCommand()) return;
    const command = bot.commands.get(interaction.commandName);
    //если команда не зарегестрирована, то решение завершится
    if (!command) return;
    //обработка ошибок при вызове операции
    try {
            await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: `[ERROR MES] - При выполнении этой команды произошла ошибка! ${command.data.name}` , ephemeral: true });
    }
});


bot.login(token);