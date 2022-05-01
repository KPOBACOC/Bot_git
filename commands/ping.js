const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('ВЫводит твой пинг'),

	async execute(interaction) {
		
		const embed = new MessageEmbed()
		.setTitle('Привет')
		.setDescription(`Пинг : ${interaction.client.ws.ping}`)
		.setColor('RED');
	

	await interaction.reply({
		embeds: [embed],
		ephemeral: true
	}).catch(console.error)
}};