const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data : new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Отвечает с содержанием вашего сообщения')
        .addStringOption(option => 
            option.setName('input')
            .setDescription('Входной сигнал для обратного эха')
            .setRequired(true)),

        async execute(interaction) {
            const input = interaction.options.getString("input");
            await interaction.reply(`получи обратно: ${input}`);
        },
            
};