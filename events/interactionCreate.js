module.exports = {
    name: 'interactionCreate',
    execute(interaction){
        console.log(`[INTERACTION CMDS] - ${interaction.user.tag} в #${interaction.channel.name} инициализировал взаимодействие ${interaction.commandName}.`);
    },
};

