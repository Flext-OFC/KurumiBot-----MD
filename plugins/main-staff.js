let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *𝗖𝗿𝗮𝗱𝗼𝗿 𝘆 𝗔𝘀𝗶𝘀𝘁𝗲𝗻𝘁𝗲𝘀* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *𝗖𝗿𝗲𝗮𝗱𝗼𝗿:*

ᰔᩚ 𝑭𝒍𝒆𝒙𝒕-𝑶𝑭𝑪-𝑴𝑶𝑫
> 🜸 𝐑𝐨𝐥 » *𝐂𝐫𝐞𝐚𝐝𝐨𝐫*
> ✧ 𝑮𝒊𝒕𝑯𝒖𝒃 » https://github.com/flextOFC

`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), m)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
