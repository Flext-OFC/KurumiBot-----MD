import db from '../lib/database.js';
import moment from 'moment-timezone';

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

    if (!(who in global.db.data.users)) {
        return conn.reply(m.chat, `${emoji} El usuario no se encuentra en mi base de Datos.`, m);
    }
    
    let img = 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745557972839.jpeg';
    let user = global.db.data.users[who];
    let name = conn.getName(who);

    let premium = user.premium ? '✅' : '❌';

    let text = `╭━〔 ɪɴᴠᴇɴᴛᴀʀɪᴏ ᴅᴇ ${name} 〕⬣\n` +
               `┋ 💸 *${moneda} en Cartera:* ${user.coin || 0}\n` +  
               `┋ 🏦 *${moneda} en Banco:* ${user.bank || 0}\n` + 
               `┋ ♦️ *𝗘𝘀𝗺𝗲𝗿𝗮𝗹𝗱𝗮𝘀:* ${user.emerald || 0}\n` + 
               `┋ 🔩 *𝗛𝗶𝗲𝗿𝗿𝗼:* ${user.iron || 0}\n` +  
               `┋ 🏅 *𝗢𝗿𝗼:* ${user.gold || 0}\n` + 
               `┋ 🕋 *𝗖𝗮𝗿𝗯𝗼𝗻:* ${user.coal || 0}\n` +  
               `┋ 🪨 *𝗣𝗶𝗲𝗱𝗿𝗮:* ${user.stone || 0}\n` +  
               `┋ ✨ *𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮:* ${user.exp || 0}\n` + 
               `┋ ❤️ *𝗦𝗮𝗹𝘂𝗱:* ${user.health || 100}\n` + 
               `┋ 💎 *𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀:* ${user.diamond || 0}\n` +   
               `┋ 🍬 *𝗗𝘂𝗹𝗰𝗲𝘀:* ${user.candies || 0}\n` + 
               `┋ 🎁 *𝗥𝗲𝗴𝗮𝗹𝗼𝘀:* ${user.gifts || 0}\n` + 
               `┋ 🎟️ *𝗧𝗼𝗸𝗲𝗻𝘀:* ${user.joincount || 0}\n` +  
               `┋ ⚜️ *𝗣𝗿𝗲𝗺𝗶𝘂𝗺:* ${premium}\n` + 
               `┋ ⏳ *Ú𝗹𝘁𝗶𝗺𝗮 Aventura:* ${user.lastAdventure ? moment(user.lastAdventure).fromNow() : 'Nunca'}\n` + 
               `┋ 📅 *𝗙𝗲𝗰𝗵𝗮:* ${new Date().toLocaleString('id-ID')}\n` +
               `╰━━━━━━━━━━━━⬣`;

    await conn.sendFile(m.chat, img, 'yuki.jpg', text, fkontak);
}

handler.help = ['inventario', 'inv'];
handler.tags = ['rpg'];
handler.command = ['inventario', 'inv']; 
handler.group = true;
handler.register = true;

export default handler;
