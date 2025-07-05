let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `
Hola! Soy *${botname}* (｡•̀ᴗ-)✧
𝗔𝗾𝘂𝗶 𝘁𝗶𝗲𝗻𝗲𝘀 𝗹𝗮 𝗹𝗶𝘀𝘁𝗮 𝗱𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀
╭┈ ↷
│➟ Cliente » @${userId.split('@')[0]}
│❀ Modo » Publico
│ঔৣ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
│ⴵ Activada » ${uptime}
│✰ Usuarios » ${totalreg}
│✧ Comandos » ${totalCommands}
│🜸 Baileys » Multi Device
╰─────────────────
𝙲𝚛𝚎𝚊 𝚞𝚗 *𝑺𝒖𝒃-𝑩𝒐𝒕* 𝚌𝚘𝚗 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚞𝚝𝚒𝚕𝚒𝚣𝚊𝚗𝚍𝚘 *#qr* 𝚘 *#code*

•°• ✾ •°•╰ 𝐈𝐧𝐟𝐨-𝐁𝐨𝐭-𝐊𝐮𝐫𝐮𝐦𝐢 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴠᴇʀ ᴇsᴛᴀᴅᴏ ᴇ ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇ ʟᴀ ʙᴏᴛ.
➟ *#help • #menu*
> ঔৣ Ver la lista de comandos de la Bot.
➟ *#uptime • #runtime*
> ঔৣ Ver tiempo activo o en linea de la Bot.
➟ *#sc • #script*
> ঔৣ Link del repositorio oficial de la Bot
➟ *#staff • #colaboradores*
> ঔৣ Ver la lista de desarrolladores de la Bot.
➟ *#serbot • #serbot code*
> ঔৣ Crea una sesión de Sub-Bot.
➟ *#bots • #sockets*
> ঔৣ Ver la lista de Sub-Bots activos.
➟ *#creador*
> ঔৣ Contacto del creador de la Bot.
➟ *#status • #estado*
> ঔৣ Ver el estado actual de la Bot.
➟ *#links • #grupos*
> ঔৣ Ver los enlaces oficiales de la Bot.
➟ *#infobot • #infobot*
> ঔৣ Ver la información completa de la Bot.
➟ *#sug • #newcommand*
> ঔৣ Sugiere un nuevo comando.
➟ *#p • #ping*
> ঔৣ Ver la velocidad de respuesta del Bot.
➟ *#reporte • #reportar*
> ঔৣ Reporta alguna falla o problema de la Bot.
➟ *#sistema • #system*
> ঔৣ Ver estado del sistema de alojamiento.
➟ *#speed • #speedtest*
> ঔৣ Ver las estadísticas de velocidad de la Bot.
➟ *#views • #usuarios*
> ঔৣ Ver la cantidad de usuarios registrados en el sistema.
➟ *#funciones • #totalfunciones*
> ঔৣ Ver todas las funciones de la Bot.
➟ *#ds • #fixmsgespera*
> ঔৣ Eliminar archivos de sesión innecesarios.
➟ *#editautoresponder*
> ঔৣ Configurar un Prompt personalizado de la Bot.

•°• ✾ •°•╰ 𝐁𝐮𝐬𝐜𝐚𝐝𝐨𝐫𝐞𝐬 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ʀᴇᴀʟɪᴢᴀʀ ʙᴜsǫᴜᴇᴅᴀs ᴇɴ ᴅɪsᴛɪɴᴛᴀs ᴘʟᴀᴛᴀғᴏʀᴍᴀs.
➟ *#tiktoksearch • #tiktoks*
> ঔৣ Buscador de videos de tiktok.
➟ *#tweetposts*
> ঔৣ Buscador de posts de Twitter/X.
➟ *#ytsearch • #yts*
> ঔৣ Realiza búsquedas de Youtube.
➟ *#githubsearch*
> ঔৣ Buscador de usuarios de GitHub.
➟ *#cuevana • #cuevanasearch*
> ঔৣ Buscador de películas/series por Cuevana.
➟ *#google*
> ঔৣ Realiza búsquedas por Google.
➟ *#pin • #pinterest*
> ঔৣ Buscador de imagenes de Pinterest.
➟ *#imagen • #image*
> ঔৣ buscador de imagenes de Google.
➟ *#infoanime*
> ঔৣ Buscador de información de anime/manga.
➟ *#hentaisearch • #searchhentai*
> ঔৣ Buscador de capítulos hentai.
➟ #xnxxsearch • #xnxxs*
> ঔৣ Buscador de vídeos de Xnxx.
➟ *#xvsearch • #xvideossearch*
> ঔৣ Buscador de vídeos de Xvideos.
➟ *#pornhubsearch • #phsearch*
> ঔৣ Buscador de videos de Pornhub.
➟ *#npmjs*
> ঔৣ Buscandor de npmjs.

•°• ✾ •°•╰ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴅᴇsᴄᴀʀɢᴀs ᴘᴀʀᴀ ᴠᴀʀɪᴏs ᴀʀᴄʜɪᴠᴏs.
➟ *#tiktok • #tt*
> ঔৣ Descarga videos de TikTok.
➟ *#mediafire • #mf*
> ঔৣ Descargar un archivo de MediaFire.
➟ *#pinvid • #pinvideo* + [enlacé]
> ঔৣ Descargar vídeos de Pinterest. 
➟ *#mega • #mg* + [enlacé]
> ঔৣ Descargar un archivo de MEGA.
➟ *#play • #play2*
> ঔৣ Descarga música/video de YouTube.
➟ *#ytmp3 • #ytmp4*
> ঔৣ Descarga música/video de YouTube mediante url.
➟ *#fb • #facebook*
> ঔৣ Descarga videos de Facebook.
➟ *#twitter • #x* + [Link]
> ঔৣ Descargar un video de Twitter/X
➟ *#ig • #instagram*
> ঔৣ Descarga contenido de Instagram.
➟ *#tts • #tiktoks* + [busqueda]
> ঔৣ Buscar videos de tiktok 
➟ *#terabox • #tb* + [enlace]
> ঔৣ Descargar archivos por Terabox.
➟ *#ttimg • #ttmp3* + <url>
> ঔৣ Descarga fotos/audios de tiktok. 
➟ *#gitclone* + <url> 
> ঔৣ Descarga un repositorio de github.
➟ *#xvideosdl*
> ঔৣ Descarga videos porno de (Xvideos). 
➟ *#xnxxdl*
> ঔৣ Descarga videos porno de (xnxx).
➟ *#apk • #modapk*
> ঔৣ Descarga un apk de Aptoide.
➟ *#tiktokrandom • #ttrandom*
> ঔৣ Descarga un video aleatorio de tiktok.
➟ *#npmdl • #npmdownloader*
> ঔৣ Descarga paquetes de NPMJs.

•°• ✾ •°•╰ 𝐄𝐜𝐨𝐧𝐨𝐦𝐢𝐚 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴇᴄᴏɴᴏᴍɪᴀ ʏ ʀᴘɢ ᴘᴀʀᴀ ɢᴀɴᴀʀ ᴅɪɴᴇʀᴏ ʏ ᴏᴛʀᴏs ʀᴇᴄᴜʀsᴏs.
➟ *#w • #work • #trabajar*
> ঔৣ Trabaja para ganar ${moneda}.
➟ *#slut • #protituirse*
> ঔৣ Trabaja como prostituta y gana ${moneda}.
➟ *#cf • #suerte*
> ঔৣ Apuesta tus ${moneda} a cara o cruz.
➟ *#crime • #crimen
> ঔৣ Trabaja como ladrón para ganar ${moneda}.
➟ *#ruleta • #roulette • #rt*
> ঔৣ Apuesta ${moneda} al color rojo o negro.
➟ *#casino • #apostar*
> ঔৣ Apuesta tus ${moneda} en el casino.
➟ *#slot*
> ঔৣ Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
➟ *#cartera • #wallet*
> ঔৣ Ver tus ${moneda} en la cartera.
➟ *#banco • #bank*
> ঔৣ Ver tus ${moneda} en el banco.
➟ *#deposit • #depositar • #d*
> ঔৣ Deposita tus ${moneda} al banco.
➟ *#with • #retirar • #withdraw*
> ঔৣ Retira tus ${moneda} del banco.
➟ *#transfer • #pay*
> ঔৣ Transfiere ${moneda} o XP a otros usuarios.
➟ *#miming • #minar • #mine*
> ঔৣ Trabaja como minero y recolecta recursos.
➟ *#buyall • #buy*
> ঔৣ Compra ${moneda} con tu XP.
➟ *#daily • #diario*
> ঔৣ Reclama tu recompensa diaria.
➟ *#cofre*
> ঔৣ Reclama un cofre diario lleno de recursos.
➟ *#weekly • #semanal*
> ঔৣ Reclama tu regalo semanal.
➟ *#monthly • #mensual*
> ঔৣ Reclama tu recompensa mensual.
➟ *#steal • #robar • #rob*
> ঔৣ Intenta robarle ${moneda} a alguien.
➟ *#robarxp • #robxp*
> ঔৣ Intenta robar XP a un usuario.
➟ *#eboard • #baltop*
> ঔৣ Ver el ranking de usuarios con más ${moneda}.
➟ *#aventura • #adventure*
> ঔৣ Aventúrate en un nuevo reino y recolecta recursos.
➟ *#curar • #heal*
> ঔৣ Cura tu salud para volverte aventurar.
➟ *#cazar • #hunt • #berburu*
> ঔৣ Aventúrate en una caza de animales.
➟ *#inv • #inventario*
> ঔৣ Ver tu inventario con todos tus ítems.
➟ *#mazmorra • #explorar*
> ঔৣ Explorar mazmorras para ganar ${moneda}.
➟ *#halloween*
> ঔৣ Reclama tu dulce o truco (Solo en Halloween).
➟ *#christmas • #navidad*
> ঔৣ Reclama tu regalo navideño (Solo en Navidad).

•°• ✾ •°•╰ 𝐆𝐚𝐜𝐡𝐚 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ɢᴀᴄʜᴀ ᴘᴀʀᴀ ʀᴇᴄʟᴀᴍᴀʀ ʏ ᴄᴏʟᴇᴄᴄɪɴᴀʀ ᴘᴇʀsᴏɴᴀᴊᴇs.
➟ *#rollwaifu • #rw • #roll*
> ঔৣ Waifu o husbando aleatorio.
➟  *#claim • #c • #reclamar*
> ঔৣ Reclamar un personaje.
➟ *#harem • #waifus • #claims*
> ঔৣ Ver tus personajes reclamados.
➟ *#charimage • #waifuimage • #wimage* 
> ঔৣ Ver una imagen aleatoria de un personaje.
➟ *#charinfo • #winfo • #waifuinfo*
> ঔৣ Ver información de un personaje.
➟ *#givechar • #givewaifu • #regalar*
> ঔৣ Regalar un personaje a otro usuario.
➟ *#vote • #votar*
> ঔৣ Votar por un personaje para subir su valor.
➟ *#waifusboard • #waifustop • #topwaifus*
> ঔৣ Ver el top de personajes con mayor valor.

•°• ✾ •°•╰ 𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐬 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴘᴀʀᴀ ᴄʀᴇᴀᴄɪᴏɴᴇs ᴅᴇ sᴛɪᴄᴋᴇʀs ᴇᴛᴄ.
➟ *#sticker • #s*
> ঔৣ Crea stickers de (imagen/video)
➟ *#setmeta*
> ঔৣ Estable un pack y autor para los stickers.
➟ *#delmeta*
> ঔৣ Elimina tu pack de stickers.
➟ *#pfp • #getpic*
> ঔৣ Obtén la foto de perfil de un usuario.
➟ *#qc*
> ঔৣ Crea stickers con texto o de un usuario.
➟ *#toimg • #img*
> ঔৣ Convierte stickers en imagen.
➟ *#brat • #ttp • #attp*︎ 
> ঔৣ Crea stickers con texto.
➟ *#emojimix*
> ঔৣ Fuciona 2 emojis para crear un sticker.
➟ *#wm*
> ঔৣ Cambia el nombre de los stickers.

•:･ﾟ⊹˚• \`╰ 𝐇𝐞𝐫𝐫𝐚𝐦𝐢𝐞𝐧𝐭𝐚𝐬 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ʜᴇʀʀᴀᴍɪᴇɴᴛᴀs ᴄᴏɴ ᴍᴜᴄʜᴀs ғᴜɴᴄɪᴏɴᴇs.
➟ *#calcular • #calcular • #cal*
> ঔৣ Calcular todo tipo de ecuaciones.
➟ *#tiempo • #clima*
> ঔৣ Ver el clima de un pais.
➟ *#horario*
> ঔৣ Ver el horario global de los países.
➟ *#fake • #fakereply*
> ঔৣ Crea un mensaje falso de un usuario.
➟ *#enhance • #remini • #hd*
> ঔৣ Mejora la calidad de una imagen.
➟ *#letra*
> ঔৣ Cambia la fuente de las letras.
➟ *#read • #readviewonce • #ver*
> ঔৣ Ver imágenes de una sola vista.
➟ *#whatmusic • #shazam*
> ঔৣ Descubre el nombre de canciones o vídeos.
➟ *#ss • #ssweb*
> ঔৣ Ver el estado de una página web.
➟ *#length • #tamaño*
> ঔৣ Cambia el tamaño de imágenes y vídeos.
➟ *#say • #decir* + [texto]
> ঔৣ Repetir un mensaje.
➟ *#todoc • #toducument*
> ঔৣ Crea documentos de (audio, imágenes y vídeos).
➟ *#translate • #traducir • #trad*
> ঔৣ Traduce palabras en otros idiomas.

•°• ✾ •°•╰ 𝐏𝐞𝐫𝐟𝐢𝐥 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴘᴇʀғɪʟ ᴘᴀʀᴀ ᴠᴇʀ, ᴄᴏɴғɪɢᴜʀᴀʀ ʏ ᴄᴏᴍᴘʀᴏʙᴀʀ ᴇsᴛᴀᴅᴏs ᴅᴇ ᴛᴜ ᴘᴇʀғɪʟ.
➟ *#reg • #verificar • #register*
> ঔৣ Registra tu nombre y edad en el bot.
➟ *#unreg*
> ঔৣ Elimina tu registro del bot.
➟ *#profile*
> ঔৣ Muestra tu perfil de usuario.
➟ *#marry* [mension / etiquetar]
> ঔৣ Propón matrimonio a otro usuario.
➟ *#divorce*
> ঔৣ Divorciarte de tu pareja.
➟ *#setgenre • #setgenero*
> ঔৣ Establece tu género en el perfil del bot.
➟ *#delgenre • #delgenero*
> ঔৣ Elimina tu género del perfil del bot.
➟ *#setbirth • #setnacimiento*
> ঔৣ Establece tu fecha de nacimiento en el perfil del bot.
➟ *#delbirth • #delnacimiento*
> ঔৣ Elimina tu fecha de nacimiento del perfil del bot.
➟ *#setdescription • #setdesc*
> ঔৣ Establece una descripción en tu perfil del bot.
➟ *#deldescription • #deldesc*
> ঔৣ Elimina la descripción de tu perfil del bot.
➟ *#lb • #lboard* + <Paginá>
> ঔৣ Top de usuarios con más (experiencia y nivel).
➟ *#level • #lvl* + <@Mencion>
> ঔৣ Ver tu nivel y experiencia actual.
➟ *#comprarpremium • #premium*
> ঔৣ Compra un pase premium para usar el bot sin límites.
➟ *#confesiones • #confesar*
> ঔৣ Confiesa tus sentimientos a alguien de manera anonima.

•°• ✾ •°•╰ 𝐆𝐫𝐮𝐩𝐨𝐬 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ɢʀᴜᴘᴏs ᴘᴀʀᴀ ᴜɴᴀ ᴍᴇᴊᴏʀ ɢᴇsᴛɪᴏɴ ᴅᴇ ᴇʟʟᴏs.
➟ *#hidetag*
> ঔৣ Envia un mensaje mencionando a todos los usuarios
➟ *#gp • #infogrupo*
> ঔৣ  Ver la Informacion del grupo.
➟ *#linea • #listonline*
> ঔৣ Ver la lista de los usuarios en linea.
➟ *#setwelcome*
> ঔৣ Establecer un mensaje de bienvenida personalizado.
➟ *#setbye*
> ঔৣ Establecer un mensaje de despedida personalizado.
➟ *#link*
> ঔৣ El bot envia el link del grupo.
➟ *admins • admin*
> ঔৣ Mencionar a los admins para solicitar ayuda.
➟ *#restablecer • #revoke*
> ঔৣ Restablecer el enlace del grupo.
➟ *#grupo • #group* [open / abrir]
> ঔৣ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
➟ *#grupo • #gruop* [close / cerrar]
> ঔৣ Cambia ajustes del grupo para que solo los administradores envien mensaje.
➟ *#kick* [número / mension]
> ঔৣ Elimina un usuario de un grupo.
➟ *#add • #añadir • #agregar* [número]
> ঔৣ Invita a un usuario a tu grupo.
➟ *#promote* [mension / etiquetar]
> ঔৣ El bot dara administrador al usuario mencionando.
➟ *#demote* [mension / etiquetar]
> ঔৣ El bot quitara administrador al usuario mencionando.
➟ *#gpbanner • #groupimg*
> ঔৣ Cambiar la imagen del grupo.
➟ *#gpname • #groupname*
> ঔৣ Cambiar el nombre del grupo.
➟ *#gpdesc • #groupdesc*
> ঔৣ Cambiar la descripción del grupo.
➟ *#advertir • #warn • #warning*
> ঔৣ Darle una advertencia aún usuario.
➟ ︎*#unwarn • #delwarn*
> ঔৣ Quitar advertencias.
➟ *#advlist • #listadv*
> ঔৣ Ver lista de usuarios advertidos.
➟ *#bot on*
> ঔৣ Enciende el bot en un grupo.
➟ *#bot off*
> ঔৣ Apaga el bot en un grupo.
➟ *#mute* [mension / etiquetar]
> ঔৣ El bot elimina los mensajes del usuario.
➟ *#unmute* [mension / etiquetar]
> ঔৣ El bot deja de eliminar los mensajes del usuario.
➟ *#encuesta • #poll*
> ঔৣ Crea una encuesta.
➟ *#delete • #del*
> ঔৣ Elimina mensaje de otros usuarios.
➟ *#fantasmas*
> ঔৣ Ver lista de inactivos del grupo.
➟ *#kickfantasmas*
> ঔৣ Elimina a los inactivos del grupo.
➟ *#invocar • #tagall • #todos*
> ঔৣ Invoca a todos los usuarios de un grupo.
➟ *#setemoji • #setemo*
> ঔৣ Cambia el emoji que se usa en la invitación de usuarios.
➟ *#listnum • #kicknum*
> ঔৣ Elimine a usuario por el prefijo de país.

•°• ✾ •°•╰ 𝐀𝐧𝐢𝐦𝐞 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ʀᴇᴀᴄᴄɪᴏɴᴇs ᴅᴇ ᴀɴɪᴍᴇ.
➟ *#angry • #enojado* + <mencion>
> ঔৣ Estar enojado
➟ *#bite* + <mencion>
> ঔৣ Muerde a alguien
➟ *#bleh* + <mencion>
> ঔৣ Sacar la lengua
➟ *#blush* + <mencion>
> ঔৣ Sonrojarte
➟ *#bored • #aburrido* + <mencion>
> ঔৣ Estar aburrido
➟ *#cry* + <mencion>
> ঔৣ Llorar por algo o alguien
➟ *#cuddle* + <mencion>
> ঔৣ Acurrucarse
➟ *#dance* + <mencion>
> ঔৣ Sacate los pasitos prohíbidos
➟ *#drunk* + <mencion>
> ঔৣ Estar borracho
➟ *#eat • #comer* + <mencion>
> ঔৣ Comer algo delicioso
➟ *#facepalm* + <mencion>
> ঔৣ Darte una palmada en la cara
➟ *#happy • #feliz* + <mencion>
> ঔৣ Salta de felicidad
➟ *#hug* + <mencion>
> ঔৣ Dar un abrazo
➟ *#impregnate • #preg* + <mencion>
> ঔৣ Embarazar a alguien
➟ *#kill* + <mencion>
> ঔৣ Toma tu arma y mata a alguien
➟ *#kiss • #besar* • #kiss2 + <mencion>
> ঔৣ Dar un beso
➟ *#laugh* + <mencion>
> ঔৣ Reírte de algo o alguien
➟ *#lick* + <mencion>
> ঔৣ Lamer a alguien
➟ *#love • #amor* + <mencion>
> ঔৣ Sentirse enamorado
➟ *#pat* + <mencion>
> ঔৣ Acaricia a alguien
➟ *#poke* + <mencion>
> ঔৣ Picar a alguien
➟ *#pout* + <mencion>
> ঔৣ Hacer pucheros
➟ *#punch* + <mencion>
> ঔৣ Dar un puñetazo
➟ *#run* + <mencion>
> ঔৣ Correr
➟ *#sad • #triste* + <mencion>
> ঔৣ Expresar tristeza
➟ *#scared* + <mencion>
> ঔৣ Estar asustado
➟ *#seduce* + <mencion>
> ঔৣ Seducir a alguien
➟ *#shy • #timido* + <mencion>
> ঔৣ Sentir timidez
➟ *#slap* + <mencion>
> ঔৣ Dar una bofetada
➟ *#dias • #days*
> ঔৣ Darle los buenos días a alguien 
➟ *#noches • #nights*
> ঔৣ Darle las buenas noches a alguien 
➟ *#sleep* + <mencion>
> ঔৣ Tumbarte a dormir
➟ *#smoke* + <mencion>
> ঔৣ Fumar
➟ *#think* + <mencion>
> ঔৣ Pensar en algo

•°• ✾ •°•╰ 𝐍𝐒𝐅𝐖 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ɴsғᴡ (ᴄᴏɴᴛᴇɴɪᴅᴏ ᴘᴀʀᴀ ᴀᴅᴜʟᴛᴏs)
➟ *#anal* + <mencion>
> ঔৣ Hacer un anal
➟ *#waifu*
> ঔৣ Buscá una waifu aleatorio.
➟ *#bath* + <mencion>
> ঔৣ Bañarse
➟ *#blowjob • #mamada • #bj* + <mencion>
> ঔৣ Dar una mamada
➟ *#boobjob* + <mencion>
> ঔৣ Hacer una rusa
➟ *#cum* + <mencion>
> ঔৣ Venirse en alguien.
➟ *#fap* + <mencion>
> ঔৣ Hacerse una paja
➟ *#ppcouple • #ppcp*
> ঔৣ Genera imagenes para amistades o parejas.
➟ *#footjob* + <mencion>
> ঔৣ Hacer una paja con los pies
➟ *#fuck • #coger • #fuck2* + <mencion>
> ঔৣ Follarte a alguien
➟ *#cafe • #coffe*
> ঔৣ Tomate un cafecito con alguien
➟ *#violar • #perra + <mencion>
> ঔৣ Viola a alguien
➟ *#grabboobs* + <mencion>
> ঔৣ Agarrrar tetas
➟ *#grop* + <mencion>
> ঔৣ Manosear a alguien
➟ *#lickpussy* + <mencion>
> ঔৣ Lamer un coño
➟ *#rule34 • #r34* + [Tags]
> ঔৣ Buscar imagenes en Rule34
➟ *#sixnine • #69* + <mencion>
> ঔৣ Haz un 69 con alguien
➟ *#spank • #nalgada* + <mencion>
> ঔৣ Dar una nalgada
➟ *#suckboobs* + <mencion>
> ঔৣ Chupar tetas
➟ *#undress • #encuerar* + <mencion>
> ঔৣ Desnudar a alguien
➟ *#yuri • #tijeras* + <mencion>
> ঔৣ Hacer tijeras.

•°• ✾ •°•╰ 𝐉𝐮𝐞𝐠𝐨𝐬 ╯•°• ✾ •°•

ッ ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴊᴜᴇɢᴏs ᴘᴀʀᴀ ᴊᴜɢᴀʀ ᴄᴏɴ ᴛᴜs ᴀᴍɪɢᴏs.
➟ *#amistad • #amigorandom* 
> ঔৣ hacer amigos con un juego. 
➟ *#chaqueta • #jalamela*
> ঔৣ Hacerte una chaqueta.
➟ *#chiste*
> ঔৣ La bot te cuenta un chiste.
➟ *#consejo* 
> ঔৣ La bot te da un consejo. 
➟ *#doxeo • #doxear* + <mencion>
> ঔৣ Simular un doxeo falso.
➟ *#facto*
> ঔৣ La bot te lanza un facto. 
➟ *#formarpareja*
> ঔৣ Forma una pareja. 
➟ *#formarpareja5*
> ঔৣ Forma 5 parejas diferentes.
➟ *#frase*
> ঔৣ La bot te da una frase.
➟ *#huevo*
> ঔৣ Agarrale el huevo a alguien.
➟ *#chupalo* + <mencion>
> ঔৣ Hacer que un usuario te la chupe.
➟ *#aplauso* + <mencion>
> ঔৣ Aplaudirle a alguien.
➟ *#marron* + <mencion>
> ঔৣ Burlarte del color de piel de un usuario. 
➟ *#suicidar*
> ঔৣ Suicidate. 
➟ *#iq • #iqtest* + <mencion>
> ঔৣ Calcular el iq de alguna persona. 
➟ *#meme*
> ঔৣ La bot te envía un meme aleatorio. 
➟ *#morse*
> ঔৣ Convierte un texto a codigo morse. 
➟ *#nombreninja*
> ঔৣ Busca un nombre ninja aleatorio. 
➟ *#paja • #pajeame* 
> ঔৣ La bot te hace una paja.
➟ *#personalidad* + <mencion>
> ঔৣ La bot busca tu personalidad. 
➟ *#piropo*
> ঔৣ Lanza un piropo.
➟ *#pregunta*
> ঔৣ Hazle una pregunta a la bot.
➟ *#ship • #pareja*
> ঔৣ La bot te da la probabilidad de enamorarte de una persona. 
➟ *#sorteo*
> ঔৣ Empieza un sorteo. 
➟ *#top*
> ঔৣ Empieza un top de personas.
➟ *#formartrio* + <mencion>
> ঔৣ Forma un trio.
➟ *#ahorcado*
> ঔৣ Diviertete con la bot jugando el juego ahorcado.
➟ *#mates • #matematicas*
> ঔৣ Responde las preguntas de matemáticas para ganar recompensas.
➟ *#ppt*
> ঔৣ Juega piedra papel o tijeras con la bot.
➟ *#sopa • #buscarpalabra*
> ঔৣ Juega el famoso juego de sopa de letras.
➟ *#pvp • #suit* + <mencion>
> ঔৣ Juega un pvp contra otro usuario.
➟ *#ttt*
> ঔৣ Crea una sala de juego. 
  `.trim()

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              sourceUrl: redes,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m })

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}
