const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nome do comando')
        .setDescription('Descrissão do comando')
        .addIntegerOption(option => // apenas se for necessario
            option.setName('opção 1')
                .setDescription('Descrissão 1')
                .setRequired(true)
        ),
    async execute(interaction) {

        // conteudo do codigo

    },
};