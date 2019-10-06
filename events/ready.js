const Moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix
module.exports = client => {
  console.log("Bot aktif!")
  const aktiviteListesi = [
    `${prefix}yardım | ${client.guilds.size} sunucuya, ${client.users.size} kullanıcıya hizmet veriyoruz!`,
    'Mükemmel Sistemler!',
    '"!otorol" Komutu Aktif!',
    '"!prefix" Komutu Aktif!'
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}
