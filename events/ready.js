const Discord = require("discord.js");
const config = require('../settings.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: config.type, name: config.durum}, status: config.status })
};


console.log(config.aktiflog)
