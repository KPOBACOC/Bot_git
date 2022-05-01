const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data : new SlashCommandBuilder()
		.setName('mesdel')
		.setDescription('Удалит предыдущие сообщение'),

        //  async execute(interaction) {
        //      await interaction.reply(interaction);
        //  },
            
};
//недоработано. не использовать
