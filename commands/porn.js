const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('porn')
		.setDescription('Выводит ссылку на eva elfie'),

	async execute(interaction) {
		
		const embed = new MessageEmbed()
        .setColor('#FFC0CB')
        .setTitle('Заходи, однорукий бандит!')
        .setAuthor({ name: 'eva elfie', iconURL: 'https://k5x5n5g8.ssl.hwcdn.net/content/191249/0017-06_w800.jpg', url: 'https://www.xvideos.com/?k=eva+elfie'})
        .setDescription(`Срочно дрочить`)
        .setThumbnail('https://k5x5n5g8.ssl.hwcdn.net/content/191249/0017-06_w800.jpg')
        .addFields(
            { name: 'Руки на стол', value: 'а их там нет!'},
            { name: '\u200B', value: '\u200B' },
        ).setURL('https://www.xvideos.com/?k=eva+elfie')
        .setTimestamp()
        .setFooter({text: 'Секс', iconURL: 'https://k5x5n5g8.ssl.hwcdn.net/content/191249/0017-06_w800.jpg'});
	

	await interaction.reply({
		embeds: [embed],
		ephemeral: false
	}).catch(console.error)
}};