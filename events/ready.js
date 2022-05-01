module.exports = {
    name: 'ready',
    once: true,
    execute(bot){
        console.log(`[STARTER BOT] - Готов! Зашел как ${bot.user.tag}`);
    },
};