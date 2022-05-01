const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data : new SlashCommandBuilder()
		.setName('vklink')
		.setDescription('Ссылка на мой ВК профиль'),

        async execute(interaction) {

            const embed = new MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('Привет!')
            .setAuthor({ name: 'Бойко Александр', iconURL: 'https://sun2-12.userapi.com/s/v1/ig2/n6dYBUi9ZmivqXJju0QeUExis59H3khWv-X8qGmk3bg7tJTkHhu2ZZfNwTHCoHVoYoibwDNF1CuIg-LA5OoxM9F9.jpg?size=1215x2160&quality=95&type=album', url: 'https://vk.com/sashaboykotf'})
            .setDescription(`👆 Нажми на ссылку 👆`)
            .setThumbnail('https://sun2-12.userapi.com/s/v1/ig2/n6dYBUi9ZmivqXJju0QeUExis59H3khWv-X8qGmk3bg7tJTkHhu2ZZfNwTHCoHVoYoibwDNF1CuIg-LA5OoxM9F9.jpg?size=1215x2160&quality=95&type=album')
            .setURL('https://vk.com/sashaboykotf')
            .setTimestamp()
            .setFooter({text: 'Я', iconURL: 'https://sun2-12.userapi.com/s/v1/ig2/n6dYBUi9ZmivqXJju0QeUExis59H3khWv-X8qGmk3bg7tJTkHhu2ZZfNwTHCoHVoYoibwDNF1CuIg-LA5OoxM9F9.jpg?size=1215x2160&quality=95&type=album'});
        
            await interaction.reply({
                embeds: [embed],
                ephemeral: true
            }).catch(console.error)
        },
            
};