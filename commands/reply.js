const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data : new SlashCommandBuilder()
		.setName('reply')
		.setDescription('Покажет твою сущность'),

        async execute(interaction) {
            const message = (await interaction.reply({
                content: `***Куколд***`, 
                fetchReply: true
            }));
            message.react("🇳");
            message.react('🇮');
            message.react('🇬');
            message.react('⚙️');
            message.react('🇪');
            message.react('🇷');
        },
            
};