import ws from 'ws'
let handler = async (m, { conn, usedPrefix, isRowner}) => {
let _uptime = process.uptime() * 1000;
let totalreg = Object.keys(global.db.data.users).length
let totalchats = Object.keys(global.db.data.chats).length

let uptime = clockString(_uptime);
let users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const totalUsers = users.length;
let old = performance.now()
let neww = performance.now()
let speed = neww - old
const used = process.memoryUsage()
let info = `✨ ɪɴғᴏʀᴍᴀᴄɪᴏɴ - ${botname} ❀\n`
info += `💖  *◜𝑪𝒓𝒆𝒂𝒅𝒐𝒓◞* ⇢ ${etiqueta}\n`
info += `📌  *◜𝑷𝒓𝒆𝒇𝒊𝒋𝒐◞* ⇢ [ ${usedPrefix} ]\n`
info += `🌹  *◜𝑽𝒆𝒓𝒔𝒊𝒐𝒏◞* ⇢ ${vs}\n`
info += `💫  *◜𝑪𝒉𝒂𝒕𝒔 𝑷𝒓𝒊𝒗𝒂𝒅𝒐𝒔◞* ⇢ ${chats.length - groupsIn.length}\n`
info += `🌸  *◜𝑻𝒐𝒕𝒂𝒍 𝑫𝒆 𝑪𝒉𝒂𝒕𝒔◞* ⇢ ${chats.length}\n`
info += `💖  *◜𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔◞* ⇢ ${totalreg}\n`
info += `❤️‍🩹  *◜𝑮𝒓𝒖𝒑𝒐𝒔◞* ⇢ ${groupsIn.length}\n`
info += `🎉  *◜𝑨𝒄𝒕𝒊𝒗𝒊𝒅𝒂𝒅◞* ⇢ ${uptime}\n`
info += `ⴵ  *◜𝑽𝒆𝒍𝒐𝒄𝒊𝒅𝒂𝒅◞* ⇢ ${(speed * 1000).toFixed(0) / 1000}\n`
info += `🌹  *Sub-Bot Activos* ⇢ ${totalUsers || '0'}`
await conn.sendFile(m.chat, banner, 'estado.jpg', info, m)
}
handler.help = ['estado']
handler.tags = ['info']
handler.command = ['estado', 'status', 'estate', 'state', 'stado', 'stats']
handler.register = true

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
