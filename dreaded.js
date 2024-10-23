
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
global.axios = require('axios').default
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics"); 
const yts = require("yt-search");
const uploadtoimgur = require('./lib/imgur');
const advice = require("badadvice");
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud");
// const node = require("node-fetch-commonjs");
const ytdl = require("ytdl-core");
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided
const { fetchUrl, isUrl, processTime } = require("./lib/dreadfunc");
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/dreadupload');
const { Configuration, OpenAIApi } = require("openai");
let setting = process.env.AI; 
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/dreadfunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = dreaded = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
       ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
	  var msgDreaded = m.message.extendedTextMessage?.contextInfo?.quotedMessage;
   // leave the prefix string empty if you don't want the bot to use a prefix
    const prefix = process.env.PREFIX || '';
const Heroku = require("heroku-client");  
 const appname = process.env.APP_NAME || '';
 const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
    const cmd = body.startsWith(prefix);
//const autobio = process.env.AUTOBIO || 'TRUE';
const botname = process.env.BOTNAME || 'RAVEN AI';
const antibot = process.env.ANTIBOT || 'FALSE';
  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
    const fortu = (m.quoted || m); 
         const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 
 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
    const author = process.env.STICKER_AUTHOR ||'𝐍𝐢𝐜𝐤';
    const packname = process.env.STICKER_PACKNAME || '𝐇𝐮𝐧𝐭𝐞𝐫';
const dev = process.env.DEV || '254114660061';

const menu = process.env.MENU_TYPE || 'VIDEO';
 const DevDreaded = dev.split(",");
    const badwordkick = process.env.BAD_WORD_KICK || 'TRUE';
   const bad = process.env.BAD_WORD || 'fuck';
    const autoread = process.env.AUTOREAD || 'FALSE';
    const badword = bad.split(",");
    const Owner = DevDreaded.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    // Group
   
   const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
    const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
const admin = process.env.ADMIN_MSG || 'Are you an admin?';
    const group = process.env.GROUP_ONLY_MSG || 'Is this a group chat?';
    const botAdmin = process.env.BOT_ADMIN_MSG || 'Am I an admin?'
    const NotOwner = process.env.NOT_OWNER_MSG || 'Are you the owner?';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';
 
const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " 𝐝𝐚𝐲, " : " 𝐃𝐚𝐲, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " 𝐡𝐨𝐮𝐫, " : " 𝐇𝐨𝐮𝐫𝐬, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " 𝐦𝐢𝐧𝐮𝐭𝐞, " : " 𝐌𝐢𝐧𝐮𝐭𝐞𝐬, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " 𝐬𝐞𝐜𝐨𝐧𝐝" : " 𝐒𝐞𝐜𝐨𝐧𝐝𝐬") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 
  
 const timestamp = speed(); 
   const dreadedspeed = speed() - timestamp 
 
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

if (wapresence === 'recording' && !m.isGroup) { 
            
  client.sendPresenceUpdate('recording', m.chat);
} else if (wapresence === 'typing' && !m.isGroup) { 
            
  client.sendPresenceUpdate('recording', m.chat);
    }
    



    if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }
      if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) return;



  
  
 

         
function _0x4f1b(_0x44e88, _0x1e223f) {
    var _0x3db626 = _0x11cc();
    return _0x4f1b = function (_0x2e8ed0, _0x5cd594) {
        _0x2e8ed0 = _0x2e8ed0 - (0x13bd + 0xcbb * 0x3 + -0x38ae);
        var _0x1e37b8 = _0x3db626[_0x2e8ed0];
        return _0x1e37b8;
    }, _0x4f1b(_0x44e88, _0x1e223f);
}
var _0x2e16c2 = _0x4f1b;
function _0x11cc() {
    var _0x4506b9 = [
        'length',
        '4NTZryU',
        'BAE5',
        '1565770bnKzAf',
        'sender',
        'groupParti',
        'split',
        '84AXXWgJ',
        '4435424UJQIXb',
        'y\x20RAVEN\x20',
        'TRUE',
        'tibot:\x0a\x0a@',
        '\x20as\x20a\x20bot.',
        '2LGBzpD',
        'sendMessag',
        'ate',
        '\x20Removed\x20b',
        '\x20unnecessa',
        '5880358pnqlFT',
        'cipantsUpd',
        '356958TiEbec',
        '\x20has\x20been\x20',
        'chat',
        'ry\x20spam!',
        'remove',
        'identified',
        '3301765GBoZYn',
        'to\x20prevent',
        'isGroup',
        '184473FwtnYZ',
        '18szWhmE',
        'startsWith',
        '𝐑𝐀𝐕𝐄𝐍-𝐀𝐈\x20an',
        '376590puyzhN',
        'key'
    ];
    _0x11cc = function () {
        return _0x4506b9;
    };
    return _0x11cc();
}
(function (_0xb3d1a0, _0x4f6370) {
    var _0x132d30 = _0x4f1b, _0x276ffb = _0xb3d1a0();
    while (!![]) {
        try {
            var _0x5a0c14 = -parseInt(_0x132d30(0x161)) / (0x1102 + 0x227 * 0x11 + -0x3598) * (-parseInt(_0x132d30(0x14d)) / (-0x2 * -0x1231 + 0x1 * 0xca + -0x252a * 0x1)) + parseInt(_0x132d30(0x15d)) / (-0x23 * -0xb7 + -0x141 * 0x3 + -0x153f) + parseInt(_0x132d30(0x141)) / (-0x2489 + 0x1cdf * -0x1 + 0x4 * 0x105b) * (parseInt(_0x132d30(0x15a)) / (-0x2 * -0xe87 + 0x22 * 0xb + -0x1e7f)) + -parseInt(_0x132d30(0x154)) / (-0x2c2 + 0x22 + -0xe2 * -0x3) * (-parseInt(_0x132d30(0x147)) / (0x58 * -0x4a + -0x8fd + 0x2274)) + -parseInt(_0x132d30(0x148)) / (0x2 * -0xc9a + 0x685 * -0x4 + 0x3350) + parseInt(_0x132d30(0x15e)) / (-0x427 * 0x3 + -0x1fd3 * 0x1 + -0x5 * -0x8dd) * (-parseInt(_0x132d30(0x143)) / (-0x1d65 + -0x26eb + 0x2 * 0x222d)) + -parseInt(_0x132d30(0x152)) / (-0x16d4 + 0x8 * -0x11f + 0x1fd7);
            if (_0x5a0c14 === _0x4f6370)
                break;
            else
                _0x276ffb['push'](_0x276ffb['shift']());
        } catch (_0x18afd9) {
            _0x276ffb['push'](_0x276ffb['shift']());
        }
    }
}(_0x11cc, 0x186eb * 0x4 + 0x24 * 0x9e + -0xb * -0x17e));
antibot === _0x2e16c2(0x14a) && mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x15f)](_0x2e16c2(0x142)) && m[_0x2e16c2(0x15c)] && !isAdmin && isBotAdmin && mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x140)] === -0xe50 + -0x57a * -0x4 + 0x4 * -0x1e2 && (kidts = m[_0x2e16c2(0x144)], client[_0x2e16c2(0x14e) + 'e'](m[_0x2e16c2(0x156)], {
    'text': _0x2e16c2(0x160) + _0x2e16c2(0x14b) + kidts[_0x2e16c2(0x146)]('@')[-0x12da + 0x247c + -0x25 * 0x7a] + (_0x2e16c2(0x155) + _0x2e16c2(0x159) + _0x2e16c2(0x14c) + _0x2e16c2(0x150) + _0x2e16c2(0x149) + _0x2e16c2(0x15b) + _0x2e16c2(0x151) + _0x2e16c2(0x157)),
    'contextInfo': { 'mentionedJid': [kidts] }
}, { 'quoted': m }), await client[_0x2e16c2(0x145) + _0x2e16c2(0x153) + _0x2e16c2(0x14f)](m[_0x2e16c2(0x156)], [kidts], _0x2e16c2(0x158)));
if (budy.startsWith('>')) { 
   if (!Owner) return;
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
 


async function audiovn () {
var lod = [
"😁",
"😏",
"😲",
        "🥶",	
"𝐑𝐀𝐕𝐄𝐍-𝐁𝐎𝐓!"
]
let { key } = await client.sendMessage(from, {text: '𝐑𝐀𝐕𝐄𝐍-𝐁𝐎𝐓!...'})

for (let i = 0; i < lod.length; i++) {
await client.sendMessage(from, {text: lod[i], edit: key });
}
	}
    if (gptdm === 'TRUE' && m.chat.endsWith("@s.whatsapp.net")) {

  	

  // if (!text) return reply("I need more text. For better experience with my inbox AI make longer statements.");

  let d = await fetchJson(
            `https://bk9.fun/ai/gptt4?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
    }
if (badwordkick === 'TRUE' && isBotAdmin && !isAdmin && body && (new RegExp('\\b' + badword.join('\\b|\\b') + '\\b')).test(body.toLowerCase())) {
            
     client.groupParticipantsUpdate(from, [sender], 'remove')
            reply("Au revoir.\n\nBot owner hates usage of bad words!")
            
        
                                                   }
    if (antilink === 'TRUE' && body.includes('chat.whatsapp.com') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 kid = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: kid 
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [kid], 'remove')); 
 client.sendMessage(m.chat, {text:`Hey idiot Next time learn to Follow group rules, You out!:\n\n@${kid.split("@")[0]}, sending group links is prohibited here!`, contextInfo:{mentionedJid:[kid]}}, {quoted:m}); 
       }   

if (antilink === 'TRUE' && antilinkall === 'TRUE' && body.includes('http') && !Owner && isBotAdmin && !isAdmin && m.isGroup) { 
  
 ki = m.sender; 
  
 client.sendMessage(m.chat, { 
  
                delete: { 
                   remoteJid: m.chat, 
                   fromMe: false, 
                   id: m.key.id, 
                   participant: ki
                } 
             }).then(() => client.groupParticipantsUpdate(m.chat, [ki], 'remove')); 
 client.sendMessage(m.chat, {text:`Hey Bastard, Am sorry bt Next time follow group rules, You out:\n\n@${ki.split("@")[0]}, sending links is prohibited in this group!`, contextInfo:{mentionedJid:[ki]}}, {quoted:m}); 
       }   
  
  
  

    if (cmd && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ RAVEN-AI ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (cmd && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (cmd) {
      switch (command) {
      case "help":
        case "menu":
		      await client.sendMessage(m.chat, {audio: menu.mp3, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
		      
let cap = `╭═══𒋨〘 𝐑𝐀𝐕𝐄𝐍 𝐀𝐈 〙═─═𒋨࿌
┃✬╭═───────◇───────═╮
┃✬│ 𝐎𝐰𝐧𝐞𝐫 : 𝗡𝗶𝗰𝗸°•°
┃✬│ 𝐔𝐬𝐞𝐫 : ${m.pushName}
┃✬│ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : 𝐇𝐞𝐫𝐨𝐤𝐮
┃✬│ 𝐒𝐩𝐞𝐞𝐝 : ${dreadedspeed.toFixed(4)} 𝐦𝐬
┃✬│ 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐑𝐀𝐌 : 96𝐆𝐁 𝐨𝐟 512𝐆𝐁
┃✬│ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┃✬│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: 𝗩7.𝟎.2
┃✬│●───●───●───●─●╮
┃✬│  ▋▋𝐑𝐀𝐕𝐄𝐍 𝐁𝐎𝐓 ▋▋
┃✬│●───●───●───●─●╯
╰══༄༄༄༄༄༄༄༄༄༄༄༄𖤓╯
●════〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 〙═──═●
╭══───────◇───────═╮
┃✬│ 𝗩𝗶𝗱𝗲𝗼
┃✬│ 𝗣𝗹𝗮𝘆
┃✬│ 𝗣𝗹𝗮𝘆2
┃✬│ 𝗦𝗼𝗻𝗴
┃✬│ 𝗙𝗯𝗱𝗹
┃✬│ 𝗧𝗶𝗸𝘁𝗼𝗸
┃✬│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿
┃✬│ 𝗠𝗼𝘃𝗶𝗲
┃✬│ 𝗟𝘆𝗿𝗶𝗰𝘀
┃✬│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴
┃✬│ 𝗬𝘁𝘀
┃✬│ 𝗬𝘁𝗺𝗽3
┃✬│ 𝗬𝘁𝗺𝗽4
╰══༄༄༄༄༄༄༄༄༄༄༄༄𖤓╯
●═════ 〘 𝗘𝗗𝗜𝗧 〙══───═●
╭─═───────◇───────═╮
┃✬│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿
┃✬│ 𝗦𝗺𝗲𝗺𝗲
┃✬│ 𝗣𝗵𝗼𝘁𝗼
┃✬│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲
┃✬│ 𝗩𝘃
┃✬│ 𝗠𝗶𝘅
┃✬│ 𝗧𝗮𝗸𝗲
┃✬│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆
╰═༄༄༄༄༄༄༄༄༄༄༄༄༄𖤓╯
●═════ 〘 𝗚𝗣𝗧 〙═────═●
╭══───────◇───────══╮
┃✬│ 𝗥𝗮𝘃𝗲𝗻
┃✬│ 𝗚𝗲𝗺𝗶𝗻𝗶
┃✬│ 𝗚𝗽𝘁
┃✬│ 𝗚𝗽𝘁2                                                                                                                                                                                                                                                        
╰═༄༄༄༄༄༄༄༄༄༄༄༄༄𖤓╯
●════ 〘 𝗚𝗥𝗢𝗨𝗣 〙═───═●
╭══───────◇───────══╮
┃✬│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲
┃✬│ 𝗗𝗲𝗺𝗼𝘁𝗲
┃✬│ 𝗗𝗲𝗹𝗲𝘁𝗲
┃✬│ 𝗥𝗲𝗺𝗼𝘃𝗲
┃✬│ 𝗙𝗮𝗸𝗲𝗿
┃✬│ 𝗖𝗹𝗼𝘀𝗲
┃✬│ 𝗢𝗽𝗲𝗻
┃✬│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳
┃✬│ 𝗗𝗶𝘀𝗽-7
┃✬│ 𝗗𝗶𝘀𝗽-90
┃✬│ 𝗜𝗰𝗼𝗻
┃✬│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁
┃✬│ 𝗗𝗲𝘀𝗰
┃✬│ 𝗟𝗲𝗮𝘃𝗲
┃✬│ 𝗧𝗮𝗴𝗮𝗹𝗹
┃✬│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴
┃✬│ 𝗥𝗲𝘃𝗼𝗸𝗲
┃✬│ 𝗠𝘂𝘁𝗲
┃✬│ 𝗨𝗻𝗺𝘂𝘁𝗲
╰═══༄༄༄༄༄༄༄༄༄༄༄༄࿌╯
●═══ 〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 〙 ═───═●
╭══───────◇───────══╮
┃✬│ 𝗢𝘄𝗻𝗲𝗿
┃✬│ 𝗡𝗶𝗰𝗸
┃✬│ 𝗦𝗰𝗿𝗶𝗽𝘁
┃✬│ 𝗠𝗲𝗻𝘂
┃✬│ 𝗟𝗶𝘀𝘁
┃✬│ 𝗣𝗶𝗻𝗴
┃✬│ 𝗔𝗹𝗶𝘃𝗲
┃✬│ 𝗦𝗽𝗲𝗲𝗱
┃✬│ 𝗥𝗲𝗽𝗼
┃✬│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
┃✬│ 𝗗𝗽
┃✬│ 𝗘𝗻𝗰
┃✬│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆
┃✬│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀
┃✬│ 𝗠𝗮𝗶𝗹
┃✬│ 𝗜𝗻𝗯𝗼𝘅
╰═༄༄༄༄༄༄༄༄༄༄༄༄༄࿌╯
●═══  〘 𝗢𝗪𝗡𝗘𝗥  〙═───═●
╭══───────◇───────══╮
┃✬│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁
┃✬│ 𝗔𝗱𝗺𝗶𝗻
┃✬│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
┃✬│ 𝗝𝗼𝗶𝗻
┃✬│ 𝗦𝗲𝘁𝘃𝗮𝗿
┃✬│ 𝗕𝗼𝘁𝗽𝗽
┃✬│ 𝗕𝗹𝗼𝗰𝗸
┃✬│ 𝗨𝗻𝗯𝗼𝗰𝗸
┃✬│ 𝗞𝗶𝗹𝗹
┃✬│ >
╰══࿌༄༄༄༄༄༄༄༄༄༄༄࿌╯
●═══ 〘 𝗢𝗧𝗛𝗘𝗥𝗦  〙═──═●
╭══───────◇───────══╮
┃✬│ 𝗚𝗽𝘁 𝗶𝗻𝗯𝗼𝘅
┃✬│ 𝗘𝘃𝗮𝗹
┃✬│ 𝗨𝗽𝗹𝗼𝗮𝗱
┃✬│ 𝗔𝘁𝘁𝗽
┃✬│ 𝗨𝗿𝗹
┃✬│ 𝗔𝗱𝘃𝗶𝗰𝗲
┃✬│ 𝗦𝘆𝘀𝘁𝗲𝗺
┃✬╰═───────◇───────═╯
┃✬│   ▍▍𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧  ▍▍
╰═༄༄༄༄༄༄༄༄༄༄༄༄༄࿌╯`;

if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./menu.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'TEXT') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/eebe191a0520a79979b34.jpg' }, caption: cap, fileLength: "9999999999"}, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `𝐑𝐀𝐕𝐄𝐍-𝐀𝐈`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./Raven.jpg'),
                                sourceUrl: 'https://wa.me/254114660061?text=Hello👋+Nick+Nihostie+Bot+Mkuu+😔',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
          // Group Commands
break;


case "advice":
reply(advice());
console.log(advice());

break;
	      
case "compile-py":

if (!text && !m.quoted) throw 'Quote/tag a python code to compile.';

const sourcecode = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text

let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(resultt => {
        console.log(resultt);

reply(resultt.stdout);
reply(resultt.stderr);
    })
    .catch(err => {
        console.log(resultt.stderr);
reply(resultt.stderr)
    });

break;

       case 'raven':{
try {
if (!q) return reply("This is raven Darkgpt, I respond to anything be it harmful, Am a pure Evil. This API is stolen from GURU");
    const msg = encodeURIComponent(q);
     const data = await fetch(`https://dark.guruapi.tech/egpt?prompt=${msg}`);
    const msgg = await data.json();
    if (!msgg.message) return reply('Huh, your darkness is beyond level!');
    const final = msgg.message;
await reply(final)
} catch (e) {
reply('An error occured while communicating with the APIs\n' + e);
}
}
break;

   case "gpt2": {
const { G4F } = require("g4f"); 
if (!text) return m.reply("What's your question ?");

try {


const GPT = new G4F(); 

const messages = [
        { role: "system", content: "You're a whatsapp bot called Raven AI that processes users text and accepts commands. You work courtesy of bing from Microsoft."},
        { role: "user", content: text}
];


GPT.chatCompletion(messages)
  .then(result => {
   
    m.reply(result);
  });

} catch (e) {
console.log(e);

 m.reply("Error occured") }



}
break;
case "compile-js":
if (!text && !m.quoted) throw 'Quote/tag a Js code to compile.';

const sourcecode1 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text;

let resultPromise1 = node.runSource(sourcecode1);
resultPromise1
    .then(resultt1 => {
        console.log(resultt1);
reply(resultt1.stdout);
reply(resultt1.stderr);
    })
    .catch(err => {
        console.log(resultt1.stderr);
reply(resultt1.stderr);
    });



break;

  case 'quotely': {
try {
if (!m.quoted.text) throw 'Tag a text';
let xf = m.quoted.text;

                const {
                    quote
                } = require('./lib/dreadquotely.js')
                
                let pppuser = await client.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/eebe191a0520a79979b34.jpg')
                
const rel = await quote(xf, pushname, pppuser)
                
                client.sendImageAsSticker(m.chat, rel.result, m, {
                    packname: pushname,
                    author: `DreadedBot`
                })

} catch (errr) { 
 await reply("Tag some text for quotely")}

            }
   break;
		      
            case "upload": case "url": {
 const fs = require("fs");
const path = require('path');

const util = require("util");

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

if (!mime) return m.reply('Quote an image or video')

let mediaBuffer = await q.download()

  if (mediaBuffer.length > 10 * 1024 * 1024) return m.reply('Media is too large.')




let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)


if (isTele) {

let fta2 = await client.downloadAndSaveMediaMessage(q)

    let link = await uploadtoimgur(fta2)

    const fileSizeMB = (mediaBuffer.length / (1024 * 1024)).toFixed(2)

    m.reply(`Media Link:-\n\n${link}`)
  } else {
    m.reply(`Error occured...`)
  }
              
      
          
                


            }
      break;
case 'attp':
                if (!q) return reply('I need text;')
              
                client.sendMessage(m.chat, {
                    sticker: {
                        url: `https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=${q}`
                    }
                }, {
                    quoted: m
                })
                break;
            case 'smeme': {
                let responnd = `Quote an image or sticker with the 2 texts separated with |`
                if (!/image/.test(mime)) return reply(responnd)
                if (!text) return reply(responnd)
           
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await client.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await client.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,

                })
                fs.unlinkSync(pop)
            }
            
break;
case "compile-c":

if (!text && !m.quoted) throw 'Quote/tag a C code to compile';

const sourcecode3 =m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise3 = c.runSource(sourcecode3);
resultPromise3
    .then(resultt3 => {
        console.log(resultt3);
reply(resultt3.stdout);
reply(resultt3.stderr);    })
    .catch(err => {
        console.log(resultt3.stderr);
reply(resultt3.stderr)
    });
break;

case "compile-c++":

if (!text && !m.quoted) throw 'Quote/tag a C++ code to compile';

const sourcecode4 = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : m.text
let resultPromise4 = cpp.runSource(sourcecode4);
resultPromise4
    .then(resultt4 => {
        console.log(resultt4);
reply(resultt4.stdout);
reply(resultt4.stderr);
    })
    .catch(err => {
        console.log(resultt4.stderr);
reply(resultt4.stderr)
    });
break;
case "eval":{
   if (Doneer) throw NotOwner; 
if (!text) throw 'Provide a valid Bot Baileys Function to evaluate'
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
 } 
 
          break;
case "kill": case "kickall":
const _0x409dbc=_0x1a95;(function(_0x13296f,_0x1d8f2b){const _0x935a90=_0x1a95,_0x2748e8=_0x13296f();while(!![]){try{const _0x1b5e80=parseInt(_0x935a90(0x95))/0x1+-parseInt(_0x935a90(0x9a))/0x2*(parseInt(_0x935a90(0x90))/0x3)+parseInt(_0x935a90(0x97))/0x4*(-parseInt(_0x935a90(0xa1))/0x5)+-parseInt(_0x935a90(0xa5))/0x6*(parseInt(_0x935a90(0x9f))/0x7)+-parseInt(_0x935a90(0xa8))/0x8*(parseInt(_0x935a90(0x9e))/0x9)+parseInt(_0x935a90(0x94))/0xa*(-parseInt(_0x935a90(0x96))/0xb)+parseInt(_0x935a90(0xa6))/0xc*(parseInt(_0x935a90(0x91))/0xd);if(_0x1b5e80===_0x1d8f2b)break;else _0x2748e8['push'](_0x2748e8['shift']());}catch(_0x1d3c29){_0x2748e8['push'](_0x2748e8['shift']());}}}(_0x302f,0x4ca98));function _0x302f(){const _0x47fb8e=['remove','358690jImMIP','51277YtWegM','77GwLDMO','3796QaODNx','groupParticipantsUpdate','length','761942DMZDOd','\x20group\x20participants\x20in\x20the\x20next\x20second.\x0a\x0aGoodbye\x20Everyone!\x20👋\x0a\x0aTHIS\x20PROCESS\x20CANNOT\x20BE\x20TERMINATED💀!','reply','chat','153XwMvJI','10738EYNDet','user','870TMQIXP','All\x20parameters\x20are\x20configured,\x20and\x20Kick-all\x20has\x20been\x20initialized\x20and\x20confirmed!.\x20Now,\x20Raven\x20will\x20remove\x20all\x20','filter','sendMessage','822dyXmDW','16642716DACfKI','Done✅.\x20All\x20group\x20participants\x20have\x20been\x20removed.\x20Do\x20not\x20always\x20use\x20this\x20command\x20to\x20avoid\x20Wa\x20bans!','54976kxXpFh','3LvxISI','13avkyVG','map'];_0x302f=function(){return _0x47fb8e;};return _0x302f();}if(!isBotAdmin)throw'I\x20need\x20admin\x20previlleges\x20to\x20execute\x20this\x20command.';if(!Owner)throw'Only Raven owner can use this command😲!';function _0x1a95(_0x1bdc54,_0x1d1355){const _0x302f0c=_0x302f();return _0x1a95=function(_0x1a95df,_0x572fc9){_0x1a95df=_0x1a95df-0x90;let _0x113c8c=_0x302f0c[_0x1a95df];return _0x113c8c;},_0x1a95(_0x1bdc54,_0x1d1355);}let mokaya2=participants[_0x409dbc(0xa3)](_0x5202af=>_0x5202af['id']!=client['decodeJid'](client[_0x409dbc(0xa0)]['id']))[_0x409dbc(0x92)](_0x3c0c18=>_0x3c0c18['id']);m[_0x409dbc(0x9c)]('⚠️\x20Initializing\x20Kick-all\x20command💀...'),setTimeout(()=>{const _0x661bcb=_0x409dbc;client[_0x661bcb(0xa4)](m[_0x661bcb(0x9d)],{'text':_0x661bcb(0xa2)+mokaya2[_0x661bcb(0x99)]+_0x661bcb(0x9b)},{'quoted':m}),setTimeout(()=>{const _0x5c1d7c=_0x661bcb;client[_0x5c1d7c(0x98)](m[_0x5c1d7c(0x9d)],mokaya2,_0x5c1d7c(0x93)),setTimeout(()=>{const _0x46c32c=_0x5c1d7c;m['reply'](_0x46c32c(0xa7));},0x3e8);},0x3e8);},0x3e8);
break;
		      
case "vcf": case "group-vcf": {
if (!m.isGroup) return m.reply("Command meant for groups");

const fs = require("fs");
let gcdata = await client.groupMetadata(m.chat)
let gcmem = participants.map(a => a.id)

let vcard = ''
let noPort = 0

for (let a of gcdata.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}

let cont = './contacts.vcf'

await m.reply('A moment, Raven is compiling '+gcdata.participants.length+' contacts into a vcf...');

await fs.writeFileSync(cont, vcard.trim())

await client.sendMessage(m.chat, {
    document: fs.readFileSync(cont), mimetype: 'text/vcard', fileName: 'Group contacts.vcf', caption: 'VCF for '+gcdata.subject+'\n'+gcdata.participants.length+' contacts'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(cont)


}
break;

case "faker":
const _0x4fc505 = _0x5ac5;
(function (_0x112631, _0x20e80a) {
    const _0x1a7d55 = _0x5ac5, _0x4ff786 = _0x112631();
    while (!![]) {
        try {
            const _0xb97d76 = -parseInt(_0x1a7d55(0x20a)) / (-0x166d + 0x193f + -0x2d1) * (parseInt(_0x1a7d55(0x218)) / (-0x255b * -0x1 + -0x24e4 * -0x1 + -0x4a3d)) + parseInt(_0x1a7d55(0x206)) / (0xaca + 0x2 * 0x8bd + -0x1c41) * (parseInt(_0x1a7d55(0x1f7)) / (-0x26f5 + 0x2b2 + 0x2447)) + parseInt(_0x1a7d55(0x215)) / (-0x1 * 0x1b63 + 0x4 * -0x283 + 0x31f * 0xc) * (parseInt(_0x1a7d55(0x1f0)) / (-0x11 * -0x6f + -0x73 * -0x10 + -0xe89)) + -parseInt(_0x1a7d55(0x213)) / (0x132 + 0x1324 + -0x144f * 0x1) * (parseInt(_0x1a7d55(0x200)) / (-0x17 * -0x1f + 0x24ac * -0x1 + 0x21eb)) + parseInt(_0x1a7d55(0x203)) / (0x1903 + 0x1 * -0x799 + -0x1161) * (parseInt(_0x1a7d55(0x210)) / (-0x1fb + -0xf1e + 0x1123)) + parseInt(_0x1a7d55(0x1f3)) / (-0x251c + 0x7 * 0xf0 + 0x1e97) * (parseInt(_0x1a7d55(0x1f6)) / (-0x1 * 0x214a + 0x23f1 + 0x17 * -0x1d)) + -parseInt(_0x1a7d55(0x214)) / (-0x1995 + 0x11 * 0xe5 + 0x1 * 0xa6d) * (-parseInt(_0x1a7d55(0x20d)) / (-0x2375 * 0x1 + -0x5f8 + 0x297b));
            if (_0xb97d76 === _0x20e80a)
                break;
            else
                _0x4ff786['push'](_0x4ff786['shift']());
        } catch (_0x2d61ef) {
            _0x4ff786['push'](_0x4ff786['shift']());
        }
    }
}(_0x40c6, -0x4c0f0 + 0x1 * -0x4324f + 0x1 * 0xb744f));
if (!m[_0x4fc505(0x211)])
    throw group;
function _0x40c6() {
    const _0x1236ea = [
        'filter',
        '5744nthuAp',
        'length',
        'admin',
        '13959HaIvRF',
        '\x20To\x20remove',
        'groupParti',
        '23334abgLtk',
        'remove',
        'accounts.\x20',
        'chat',
        '885JJdZhz',
        'sing\x20+1\x20fa',
        'map',
        '350LRJOTH',
        'reply',
        '\x20+1\x20fake\x20a',
        '430IVbQyu',
        'isGroup',
        'etected!',
        '1148VMIrqp',
        '27989tCQoID',
        '168765oAXpMe',
        'ate',
        'Raven\x20ha',
        '422RQjzbp',
        '\x20removed!',
        'No\x20virtual',
        'ccessfully',
        'ke\x20virtual',
        '6LqcMll',
        'ccounts\x20su',
        '\x20WhatsApp\x20',
        '51359DqmsYd',
        's\x20detected',
        '\x20them\x20send',
        '528XydFpU',
        '56vtYcDC',
        'startsWith',
        'decodeJid',
        'cipantsUpd',
        '\x20members\x20u',
        '\x20faker\x20-x',
        '\x20numbers\x20d',
        'user'
    ];
    _0x40c6 = function () {
        return _0x1236ea;
    };
    return _0x40c6();
}
if (!isBotAdmin)
    throw botAdmin;
if (!isAdmin)
    throw admin;
let fake = participants[_0x4fc505(0x1ff)](_0x272cc6 => !_0x272cc6[_0x4fc505(0x202)])[_0x4fc505(0x20c)](_0x5d2123 => _0x5d2123['id'])[_0x4fc505(0x1ff)](_0x410b73 => _0x410b73[_0x4fc505(0x1f8)]('1') && _0x410b73 != client[_0x4fc505(0x1f9)](client[_0x4fc505(0x1fe)]['id']));
function _0x5ac5(_0x216e16, _0x5d320c) {
    const _0x5ef00b = _0x40c6();
    return _0x5ac5 = function (_0x13f905, _0x42237c) {
        _0x13f905 = _0x13f905 - (0x1a81 * -0x1 + -0xede + 0x2b4b);
        let _0x250d4b = _0x5ef00b[_0x13f905];
        return _0x250d4b;
    }, _0x5ac5(_0x216e16, _0x5d320c);
}
if (!args || !args[0x2139 + 0x11d3 + -0x330c]) {
    if (fake[_0x4fc505(0x201)] == -0x3fb + 0xe * -0x265 + -0x1 * -0x2581)
        return reply(_0x4fc505(0x1ed) + _0x4fc505(0x1fd) + _0x4fc505(0x212));
    m[_0x4fc505(0x20e)](_0x4fc505(0x217) + _0x4fc505(0x1f4) + '\x20' + fake[_0x4fc505(0x201)] + (_0x4fc505(0x1fb) + _0x4fc505(0x20b) + _0x4fc505(0x1ef) + _0x4fc505(0x1f2) + _0x4fc505(0x208) + _0x4fc505(0x204) + _0x4fc505(0x1f5) + _0x4fc505(0x1fc)));
} else
    args[0x919 * 0x3 + 0x4f * 0x3f + -0xc * 0x3e5] == '-x' && (await client[_0x4fc505(0x205) + _0x4fc505(0x1fa) + _0x4fc505(0x216)](m[_0x4fc505(0x209)], [fake], _0x4fc505(0x207)), await m[_0x4fc505(0x20e)](fake[_0x4fc505(0x201)] + (_0x4fc505(0x20f) + _0x4fc505(0x1f1) + _0x4fc505(0x1ee) + _0x4fc505(0x1ec))));

break;

case "mail":
function _0x478d(_0x12b1f8, _0x3b487a) {
    const _0x76e8fd = _0xe76a();
    return _0x478d = function (_0x231072, _0x221693) {
        _0x231072 = _0x231072 - (-0x1905 + -0x7 * -0x3be + -0x97);
        let _0x9f9615 = _0x76e8fd[_0x231072];
        return _0x9f9615;
    }, _0x478d(_0x12b1f8, _0x3b487a);
}
const _0x236b33 = _0x478d;
function _0xe76a() {
    const _0xdd719c = [
        '2513YlFNui',
        'Use\x20this\x20t',
        'hing\x20the\x20e',
        'o\x20use\x20then',
        'rl-web.onr',
        'nutes.',
        'https://in',
        'Some\x20error',
        'nrl',
        'mail.\x0a\x0aIf\x20',
        'while\x20fetc',
        'mails\x20anon',
        '10EIyMaV',
        'mail.\x20Try\x20',
        'join',
        'ound.',
        'length',
        '147086RyUgSy',
        '1427526JwOdla',
        'ginal\x20emai',
        'ry\x20email\x20a',
        's\x20in\x20the\x20e',
        'l?apikey=i',
        'api/getmai',
        'try\x20again\x20',
        'ving\x20to\x20us',
        's\x20tempmail',
        'emporary\x20e',
        'l.\x20Tag\x20thi',
        'No\x20tempora',
        '\x20wait\x20and\x20',
        'le\x20email\x20a',
        '15AsiKok',
        'ew\x20message',
        'ywhere\x20onl',
        'e\x20your\x20ori',
        'json',
        'Error:',
        '\x20occurred\x20',
        '5005984FlBCdE',
        'ymously\x20an',
        'ddresses\x20f',
        'reply',
        'x\x20to\x20check',
        'after\x20some',
        'status',
        '11124yLJTrH',
        'error',
        '50RoPMYe',
        'sendMessag',
        '\x20with\x20inbo',
        'there\x20are\x20',
        'ender.com/',
        'ine\x20withou',
        '6593840sZQDsF',
        'after\x202\x20mi',
        't\x20using\x20ha',
        '\x20moments.',
        '126352kgguRH',
        '720308fudyxA',
        'ddresses\x20t',
        'no\x20availab',
        '\x20for\x20any\x20n',
        'result'
    ];
    _0xe76a = function () {
        return _0xdd719c;
    };
    return _0xe76a();
}
(function (_0x381c2c, _0x4ddb7d) {
    const _0x5e5ef7 = _0x478d, _0xebba60 = _0x381c2c();
    while (!![]) {
        try {
            const _0xe5d79f = -parseInt(_0x5e5ef7(0xae)) / (0x6ac * 0x1 + -0x2703 + 0x2d * 0xb8) + -parseInt(_0x5e5ef7(0xc4)) / (0x238a + 0x39 * 0x89 + -0x45 * 0xf5) * (-parseInt(_0x5e5ef7(0xd3)) / (0x1ac5 + -0x158 * 0x1 + -0x196a * 0x1)) + parseInt(_0x5e5ef7(0xad)) / (0x175 * 0x7 + -0xc2d + -0x3 * -0xaa) * (parseInt(_0x5e5ef7(0xa3)) / (0x21b8 + 0x1b * -0x159 + 0x4 * 0xac)) + -parseInt(_0x5e5ef7(0xa1)) / (0x1 * -0x1413 + -0x555 + -0xf * -0x1b2) * (parseInt(_0x5e5ef7(0xb3)) / (-0xd21 + -0x47 * -0x9 + 0x1 * 0xaa9)) + parseInt(_0x5e5ef7(0x9a)) / (-0x5 + -0xf27 + -0x116 * -0xe) + parseInt(_0x5e5ef7(0xc5)) / (0x1b52 + 0x238e + -0x3ed7) * (-parseInt(_0x5e5ef7(0xbf)) / (-0x2416 + -0x24e6 * -0x1 + -0xc6)) + parseInt(_0x5e5ef7(0xa9)) / (-0x123f + -0xd97 + 0x1 * 0x1fe1);
            if (_0xe5d79f === _0x4ddb7d)
                break;
            else
                _0xebba60['push'](_0xebba60['shift']());
        } catch (_0x99e30d) {
            _0xebba60['push'](_0xebba60['shift']());
        }
    }
}(_0xe76a, 0x9cd6e + -0x1c948 * -0x1 + -0x607c3));
try {
    const respons = await fetch(_0x236b33(0xb9) + _0x236b33(0xb7) + _0x236b33(0xa7) + _0x236b33(0xca) + _0x236b33(0xc9) + _0x236b33(0xbb)), data = await respons[_0x236b33(0x97)]();
    if (data[_0x236b33(0xa0)] && data[_0x236b33(0xb2)] && data[_0x236b33(0xb2)][_0x236b33(0xc3)] > 0x1425 + -0x5ae + -0xe77) {
        const tempMails = data[_0x236b33(0xb2)][_0x236b33(0xc1)]('\x0a\x0a'), replyMessage = '' + tempMails;
        let qq = await client[_0x236b33(0xa4) + 'e'](from, { 'text': replyMessage }, { 'quoted': m });
        await client[_0x236b33(0xa4) + 'e'](from, { 'text': _0x236b33(0xb4) + _0x236b33(0xce) + _0x236b33(0xbe) + _0x236b33(0x9b) + _0x236b33(0xd5) + _0x236b33(0xa8) + _0x236b33(0xab) + _0x236b33(0xcc) + _0x236b33(0x96) + _0x236b33(0xc6) + _0x236b33(0xcf) + _0x236b33(0xcd) + _0x236b33(0xa5) + _0x236b33(0x9e) + _0x236b33(0xb1) + _0x236b33(0xd4) + _0x236b33(0xc8) + _0x236b33(0xbc) + _0x236b33(0xa6) + _0x236b33(0xb0) + _0x236b33(0xd2) + _0x236b33(0xaf) + _0x236b33(0xb6) + _0x236b33(0xd1) + _0x236b33(0xcb) + _0x236b33(0x9f) + _0x236b33(0xac) }, { 'quoted': qq });
    } else
        m[_0x236b33(0x9d)](_0x236b33(0xd0) + _0x236b33(0xc7) + _0x236b33(0x9c) + _0x236b33(0xc2));
} catch (_0x44ab8c) {
    console[_0x236b33(0xa2)](_0x236b33(0x98), _0x44ab8c), m[_0x236b33(0x9d)](_0x236b33(0xba) + _0x236b33(0x99) + _0x236b33(0xbd) + _0x236b33(0xb5) + _0x236b33(0xc0) + _0x236b33(0xaa) + _0x236b33(0xb8));
}

break;
case "inbox":
function _0x32cd(_0x449233, _0x2d0705) {
    const _0x34e597 = _0x5082();
    return _0x32cd = function (_0xa32a5d, _0x47a454) {
        _0xa32a5d = _0xa32a5d - (0x3 * 0x478 + -0x1 * 0x1f8b + 0x13cf);
        let _0x2b85e4 = _0x34e597[_0xa32a5d];
        return _0x2b85e4;
    }, _0x32cd(_0x449233, _0x2d0705);
}
const _0x3a477f = _0x32cd;
(function (_0x34a952, _0x330549) {
    const _0x2d690b = _0x32cd, _0x3f8d20 = _0x34a952();
    while (!![]) {
        try {
            const _0x2797ea = -parseInt(_0x2d690b(0x1c4)) / (-0x2665 + -0x1c93 + 0x1 * 0x42f9) + -parseInt(_0x2d690b(0x1d9)) / (-0xa16 + 0xa1 * -0x15 + 0x174d) * (parseInt(_0x2d690b(0x1be)) / (-0x1139 * -0x2 + -0x4 * -0x24f + -0x2bab)) + -parseInt(_0x2d690b(0x1b9)) / (0x69 * 0x5e + -0x6 * -0x662 + -0x1 * 0x4cd6) * (-parseInt(_0x2d690b(0x1c3)) / (-0x3d6 * 0x5 + -0x211f + 0x16a * 0x25)) + parseInt(_0x2d690b(0x1bb)) / (0x12be + -0x670 + -0xc48) * (parseInt(_0x2d690b(0x1af)) / (0x111f + -0x19b7 * 0x1 + 0x89f)) + -parseInt(_0x2d690b(0x1b2)) / (0x1050 * -0x1 + -0xb3f + -0x1 * -0x1b97) + parseInt(_0x2d690b(0x1b6)) / (-0x1a7f + 0x15d9 + 0x4af * 0x1) * (parseInt(_0x2d690b(0x1b8)) / (0x1d1a + 0x26d6 + -0x43e6)) + parseInt(_0x2d690b(0x1dd)) / (-0xcce + 0x1 * -0x13a0 + -0x2079 * -0x1);
            if (_0x2797ea === _0x330549)
                break;
            else
                _0x3f8d20['push'](_0x3f8d20['shift']());
        } catch (_0x5bd59f) {
            _0x3f8d20['push'](_0x3f8d20['shift']());
        }
    }
}(_0x5082, -0x1 * -0x2f573 + 0x49e3a + -0x53f76));
if (!text && !(m[_0x3a477f(0x1ca)] && m[_0x3a477f(0x1ca)][_0x3a477f(0x1cd)])) {
    reply(_0x3a477f(0x1c5) + _0x3a477f(0x1bc) + _0x3a477f(0x1ae) + _0x3a477f(0x1ce) + _0x3a477f(0x1bd) + _0x3a477f(0x1b4));
    return;
}
if (!text && m[_0x3a477f(0x1ca)] && m[_0x3a477f(0x1ca)][_0x3a477f(0x1cd)])
    text = m[_0x3a477f(0x1ca)][_0x3a477f(0x1cd)];
else
    text && m[_0x3a477f(0x1ca)] && m[_0x3a477f(0x1ca)][_0x3a477f(0x1cd)] && (text = text + '\x20' + m[_0x3a477f(0x1ca)][_0x3a477f(0x1cd)]);
try {
    const respon = await fetch(_0x3a477f(0x1c7) + _0x3a477f(0x1db) + _0x3a477f(0x1c0) + _0x3a477f(0x1d3) + _0x3a477f(0x1e3) + 'l=' + encodeURIComponent(text) + (_0x3a477f(0x1c8) + 'rl')), dat = await respon[_0x3a477f(0x1b5)]();
    if (dat[_0x3a477f(0x1d4)] && dat[_0x3a477f(0x1b7)] && dat[_0x3a477f(0x1b7)][_0x3a477f(0x1ac)] > -0x1c54 + -0x119 * -0x11 + 0xa5 * 0xf) {
        const messages = dat[_0x3a477f(0x1b7)][_0x3a477f(0x1df)](_0x14768e => {
                const _0x377413 = _0x3a477f;
                return _0x377413(0x1e1) + '\x20' + _0x14768e[_0x377413(0x1c6)] + (_0x377413(0x1cc) + _0x377413(0x1bf)) + _0x14768e[_0x377413(0x1de)] + (_0x377413(0x1c9) + '\x20') + _0x14768e[_0x377413(0x1d7)] + (_0x377413(0x1b1) + _0x377413(0x1b0)) + _0x14768e[_0x377413(0x1cd)] + (_0x377413(0x1d8) + _0x377413(0x1d5));
            })[_0x3a477f(0x1d2)](_0x3a477f(0x1b3)), replyMessag = _0x3a477f(0x1e2) + text + (_0x3a477f(0x1ba) + _0x3a477f(0x1d6)) + messages;
        reply(replyMessag);
    } else
        reply(_0x3a477f(0x1cf) + _0x3a477f(0x1e0) + _0x3a477f(0x1d0) + _0x3a477f(0x1da));
} catch (_0x160635) {
    console[_0x3a477f(0x1c1)](_0x3a477f(0x1ad), _0x160635), m[_0x3a477f(0x1c2)](_0x3a477f(0x1cb) + _0x3a477f(0x1d1) + _0x3a477f(0x1dc) + text + '.');
}
function _0x5082() {
    const _0x422903 = [
        'quoted',
        'Failed\x20to\x20',
        '\x20\x0a\x20*Subjec',
        'text',
        'ote\x20a\x20mess',
        'No\x20message',
        '\x20the\x20provi',
        'check\x20mess',
        'join',
        'api/getmai',
        'status',
        '\x20\x20\x20',
        'ages:\x0a\x0a',
        'date',
        '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '10mTLAsv',
        'ded\x20mail.',
        'rl-web.onr',
        'ages\x20in\x20',
        '4300241dNwbgf',
        'subject',
        'map',
        's\x20found\x20in',
        '\x20\x0a\x20*From:*',
        'Email:\x20',
        'linfo?emai',
        'length',
        'Error:',
        'text\x20or\x20qu',
        '105FejcFX',
        '\x20\x0a\x20',
        '\x20\x0a\x20*Body:*',
        '1671944xUwKgw',
        '\x0a\x0a---\x0a\x0a',
        '\x20messages!',
        'json',
        '72Hfjgkb',
        'result',
        '287070kTPGWH',
        '8XNHoqG',
        '\x0a\x0aNew\x20Mess',
        '11586maATyg',
        'vide\x20some\x20',
        'age\x20to\x20get',
        '27858DvhSmG',
        't:*\x20',
        'ender.com/',
        'error',
        'reply',
        '1260FbLutR',
        '242002OyFGTN',
        'Please\x20pro',
        'from',
        'https://in',
        '&apikey=in',
        '\x20\x0a\x20*Date:*'
    ];
    _0x5082 = function () {
        return _0x422903;
    };
    return _0x5082();
}

break;
          case "admin" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
          if (!Owner) throw NotOwner; 
                 await client.groupParticipantsUpdate(m.chat,  [m.sender], 'promote'); 
 m.reply('Promoted To Admin<🥇'); 
          }
          break;

case 'restart':  
  if (!Owner) throw `Owner Only` 
  reply(`Restarting. . .`)  
  await sleep(3000)  
  process.exit()  
  break;
case "remove": case "kick": { 
try {
  
                 if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
  
  
  
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
 if (!users) throw NotOwner; 
 if (users  == client.decodeJid(client.user.id)) throw 'Bot cannot remove itself 😡';
 if (users == Owner) { m.reply('Its owner number')}; 
                 await client.groupParticipantsUpdate(m.chat, users, 'remove'); 
await m.reply('Successfully removed!'); 
} catch (errr) { 
 await reply("Something is Wrong, Make me an admin to proceed!")}

     
         } 
  
  break;



  case "twitter": case "twtdl": {
if (!text) return m.reply("Provide a twitter or X link for the video");



try {

const response = await fetch(`https://api.prabath-md.tech/api/twitterdl?url=${text}`);
const data = await response.json();


const twtvid = data.data.data.SD;

await client.sendMessage(m.chat,{video : {url : twtvid },caption : `Downloaded by ${botname}`,gifPlayback : false },{quoted : m}) 

} catch (e) {

m.reply("An error occured. API might be down\n" + e)

}

}
break;
	  case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply("Provide a Facebook link for the video");

if (!text.includes('facebook.com')) return m.reply("That is not a Facebook link");

try {

const response = await fetch(`https://api.prabath-md.tech/api/fdown?url=${text}`);
const data = await response.json();


const fbvid = data.data.sd;

await client.sendMessage(m.chat,{video : {url : fbvid },caption : `Downloaded by ${botname}`,gifPlayback : false },{quoted : m}) 

} catch (e) {

m.reply("An error occured. API might be down\n" + e)

}

}
break;
      case "tiktok": case "tikdl":  {
if (!text) return m.reply("Provide a tiktok link for the video");

if (!text.includes('tiktok.com')) return m.reply("That is not a tiktok link.");

try {

const response = await fetch(`https://api.prabath-md.tech/api/tiktokdl?url=${text}`);
const data = await response.json();


const tikvid = data.data.no_wm;

await client.sendMessage(m.chat,{video : {url : tikvid },caption : `Downloaded by ${botname}`,gifPlayback : false },{quoted : m}) 

} catch (e) {

m.reply("An error occured. API might be down" + e)

}

}
break;
	case "play2": {
    const yts = require("yt-search");

    try {
        if (!text) return m.reply("which song do you want to download?")

        let search = await yts(text);
        console.log(search); // Log the search results

        if (!search || !search.all || !search.all[0] || !search.all[0].url) {
            m.reply("Wrong search results");
            return;
        }

        let link = search.all[0].url;

        let data = await fetchJson(`https://widipe.com/download/ytdl?url=${link}`);
        

        if (!data || !data.result || !data.result.mp3 || !data.result.title) {
            m.reply("wrong data.");
            return;
        }

        await client.sendMessage(m.chat, {
            document: { url: data.result.mp3 },
            mimetype: "audio/mp3",
            fileName: `${data.result.title}.mp3`
        }, { quoted: m });
    } catch (error) {
        m.reply("Download failed\n" + error)
    }
}
break;
 case 'sc': case 'script': case 'repo':

 client.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/416c3ae0cfe59be8db011.jpg` }, caption: 
`👋🏻 Hello *${pushname}*,You can deploy 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 using the GitHub link below🦄\n\nFork and give us a star✨.\n\n https://github.com/HunterNick2/RAVEN-MD\n\nLink with your whatsapp using pairing link below\nhttps://replit.com/@dicksonnicky50/Pairing-Raven\n\nAfter uploading the document connect your repo with this link and deploy\nhttps://dashboard.heroku.com/new-app?template=\n\nEnjoy and have fun with 𝗥𝗔𝗩𝗘𝗡 𝗕𝗢𝗧 🦄!\n\n𝗠𝗮𝗱𝗲 𝗼𝗻 𝗲𝗮𝗿𝘁𝗵 𝗯𝘆 𝗛𝘂𝗺𝗮𝗻𝘀!` });

   break;
                                                  

 case "close": case "mute": { 
  
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'announcement'); 
 m.reply('Group successfully locked!'); 
 } 
 break; 
 case "open": case "unmute": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupSettingUpdate(m.chat, 'not_announcement'); 
 m.reply('Group successfully unlocked!'); 
  
 }
        break;
          case "disp1": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 1*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 24hrs!'); 
 } 
 break; 

          case "promote" : { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'promote'); 
 m.reply('Successfully promoted! 🦄'); 
         } 
 break; 
 case "demote": { 
                 if (!m.isGroup) throw group; 
         if (!isBotAdmin) throw botAdmin; 
         if (!isAdmin) throw admin; 
 if (!m.quoted) throw `Tag someone with the command!`; 
                 let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']; 
  
                 await client.groupParticipantsUpdate(m.chat, users, 'demote'); 
 m.reply('Successfully demoted! 😲'); 
         } 
 break;
 case "disp7": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 7*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 7 days!'); 
  
 } 
 break; 
 case "disp90": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 90*24*3600); 
 m.reply('Dissapearing messages successfully turned on for 90 days!'); 
 } 
 break; 
 case "disp-off": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
  
                     await client.groupToggleEphemeral(m.chat, 0); 
 m.reply('Dissapearing messages successfully turned off!'); 
 }
          break;

          case "icon": { 
    if (!m.isGroup) throw group; 
    if (!isAdmin) throw admin; 
    if (!isBotAdmin) throw botAdmin; 
    if (!quoted) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Send or tag an image with the caption ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply('Group icon updated'); 
    } 
    break;
          case "revoke": 
 case "newlink": 
 case "reset": { 
   if (!m.isGroup) throw group; // add "new Error" to create a new Error object 
   if (!isAdmin) throw admin; // add "new Error" to create a new Error object 
   if (!isBotAdmin) throw botAdmin; // add "new Error" to create a new Error object 
   await client.groupRevokeInvite(m.chat); 
   await client.sendText(m.chat, 'Group link revoked!', m); // use "client.sendText" instead of "m.reply" to ensure message is sent 
   let response = await client.groupInviteCode(m.chat); 
 client.sendText(m.sender, `https://chat.whatsapp.com/${response}\n\nHere is the new group link for ${groupMetadata.subject}`, m, { detectLink: true }); 
 client.sendText(m.chat, `Sent you the new group link in your inbox!`, m); 
   // use "client.sendTextWithMentions" instead of "client.sendText" to include group name in message 
 }
          
  break;
          case "delete": case "del": { 
                  if (!m.isGroup) throw group; 
  if (!isBotAdmin) throw botAdmin; 
  if (!isAdmin) throw admin; 
    if (!m.quoted) throw `No message quoted for deletion`; 
    let { chat, fromMe, id, isBaileys } = m.quoted; 
   if (isBaileys) throw `I cannot delete. Quoted message is my message or another bot message.`; 
    client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } }); 
  } 
 break;
          case "leave": { 
                 if (!isAdmin) throw admin; 
 await client.sendText(m.chat, 'GoodBye Everyone🥲. Raven is leaving now Guess we will never meet again..😔'); 
                 await client.groupLeave(m.chat); 
  
             } 
 break; 
  
 
          
          case "subject": case "changesubject": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group subject.'; 
                 await client.groupUpdateSubject(m.chat, text); 
 m.reply('Group name successfully updated! 💀'); 
             } 
             break; 
           case "desc": case "setdesc": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
                 if (!text) throw 'Provide the text for the group description' 
                 await client.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 🥶'); 
             } 
 break; 
 case "hidetag": case "tag": { 
             if (!m.isGroup) throw group; 
             if (!isBotAdmin) throw botAdmin; 
             if (!isAdmin) throw admin; 
            client.sendMessage(m.chat, { text : q ? q : '☞︎︎︎ 𝐈 𝐃𝐈𝐃 𝐍𝐎𝐓 𝐓𝐀𝐆 𝐘𝐎𝐔😂 ☜︎︎︎' , mentions: participants.map(a => a.id)}, { quoted: m }); 
             } 
 break; 
 case "tagall": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 if (!isAdmin) throw admin; 
 let teks = `𝐎𝐍𝐋𝐘 𝐅𝐎𝐎𝐋𝐒 𝐀𝐑𝐄 𝐓𝐀𝐀𝐆𝐄𝐃 𝐇𝐄𝐑𝐄💀: 
   
  Message ${q ? q : ''}*\n\n`; 
                 for (let mem of participants) { 
                 teks += `📧 @${mem.id.split('@')[0]}\n`; 
                 } 
                 client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m }); 
                 } 
 break;
 
case "whatsong": case "analyse":

function _0x14eb(){const _0x17ec6c=['Audio\x20downloading\x20->','mediaType','statSync','1919133FdmqGs','quoted','name','\x0a*•\x20Artists:*\x20','Too\x20big!','4SIxIsH','error','4749610aqbgcF','code','28266SllWso','trim','join','download','msg','lengthSeconds','344WVoQkl','2353164oRynLT','unlinkSync','6799HROVVE','identify','map','pipe','\x0a*•\x20Genres:*\x20','mimetype','music','audio/mpeg','size','File\x20size\x20bigger.','audioBitrate','KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo','floor','.mp3','finish','identify-eu-west-1.acrcloud.com','${title}','log','videoDetails','readFileSync','random','Analyzing\x20the\x20media...','chat','*!!','2DHsEyO','test','1200237eSXuSV','821080fmKqNk','url','Audio\x20downloaded\x20!\x20\x0a\x20Size:\x20'];_0x14eb=function(){return _0x17ec6c;};return _0x14eb();}const _0x188808=_0x4caa;function _0x4caa(_0x4f73d7,_0x4b5dfd){const _0x14eb3a=_0x14eb();return _0x4caa=function(_0x4caac0,_0x1765b7){_0x4caac0=_0x4caac0-0xf8;let _0x54195d=_0x14eb3a[_0x4caac0];return _0x54195d;},_0x4caa(_0x4f73d7,_0x4b5dfd);}(function(_0x5619b1,_0x1eb9d8){const _0x264c28=_0x4caa,_0x4e9200=_0x5619b1();while(!![]){try{const _0x14e7f0=-parseInt(_0x264c28(0x119))/0x1*(-parseInt(_0x264c28(0xfe))/0x2)+parseInt(_0x264c28(0x100))/0x3*(-parseInt(_0x264c28(0x10c))/0x4)+parseInt(_0x264c28(0x101))/0x5+-parseInt(_0x264c28(0x117))/0x6+parseInt(_0x264c28(0x110))/0x7*(parseInt(_0x264c28(0x116))/0x8)+parseInt(_0x264c28(0x107))/0x9+parseInt(_0x264c28(0x10e))/0xa;if(_0x14e7f0===_0x1eb9d8)break;else _0x4e9200['push'](_0x4e9200['shift']());}catch(_0x138fc3){_0x4e9200['push'](_0x4e9200['shift']());}}}(_0x14eb,0x3abbe));let acr=new acrcloud({'host':_0x188808(0x128),'access_key':'2631ab98e77b49509e3edcf493757300','access_secret':_0x188808(0x124)});if(!m['quoted'])throw'Tag\x20a\x20short\x20video\x20or\x20audio';let d=m['quoted']?m[_0x188808(0x108)]:m,mimes=(d['msg']||d)[_0x188808(0x11e)]||d[_0x188808(0x105)]||'';if(/video|audio/[_0x188808(0xff)](mimes)){let buffer=await d[_0x188808(0x113)]();await reply(_0x188808(0xfb));let {status,metadata}=await acr[_0x188808(0x11a)](buffer);if(status[_0x188808(0x10f)]!==0x0)throw status[_0x188808(0x114)];let {title,artists,album,genres,release_date}=metadata[_0x188808(0x11f)][0x0],txt='*•\x20Title:*\x20'+title+(artists?_0x188808(0x10a)+artists[_0x188808(0x11b)](_0x4f5d59=>_0x4f5d59[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'');const aud=_0x188808(0x129);txt+=''+(album?'\x0a*•\x20Album:*\x20'+album[_0x188808(0x109)]:'')+(genres?_0x188808(0x11d)+genres[_0x188808(0x11b)](_0xf7bf2e=>_0xf7bf2e[_0x188808(0x109)])[_0x188808(0x112)](',\x20'):'')+'\x0a',txt+='*•\x20Release\x20Date:*\x20'+release_date,await client['sendMessage'](m[_0x188808(0xfc)],{'text':txt[_0x188808(0x111)]()},{'quoted':m});const {videos}=await yts(title);if(!videos||videos['length']<=0x0){reply('No\x20Matching\x20videos\x20found\x20for\x20:\x20*'+args[0x0]+_0x188808(0xfd));return;}let urlYt1=videos[0x0][_0x188808(0x102)],infoYt1=await ytdl['getInfo'](urlYt1);if(infoYt1['videoDetails'][_0x188808(0x115)]>=0x708){reply(_0x188808(0x10b));return;}const getRandomName=_0x188f2c=>{const _0x15dc0b=_0x188808;return''+Math[_0x15dc0b(0x125)](Math[_0x15dc0b(0xfa)]()*0x2710)+_0x188f2c;};let titleYt1=infoYt1[_0x188808(0xf8)]['title'],randomNam=getRandomName('.mp3');const stream=ytdl(urlYt1,{'filter':_0x5ac95f=>_0x5ac95f['audioBitrate']==0xa0||_0x5ac95f[_0x188808(0x123)]==0x80})[_0x188808(0x11c)](fs['createWriteStream']('./'+randomNam));console[_0x188808(0x12a)](_0x188808(0x104),urlYt1),await new Promise((_0x1cc1a5,_0x4efba3)=>{const _0x426073=_0x188808;stream['on'](_0x426073(0x10d),_0x4efba3),stream['on'](_0x426073(0x127),_0x1cc1a5);});let stats=fs[_0x188808(0x106)]('./'+randomNam),fileSizeInBytes=stats[_0x188808(0x121)],fileSizeInMegabytes=fileSizeInBytes/(0x400*0x400);console[_0x188808(0x12a)](_0x188808(0x103)+fileSizeInMegabytes),fileSizeInMegabytes<=0x28?await client['sendMessage'](from,{'document':fs[_0x188808(0xf9)]('./'+randomNam),'mimetype':_0x188808(0x120),'fileName':titleYt1+_0x188808(0x126)},{'quoted':m}):reply(_0x188808(0x122)),fs[_0x188808(0x118)]('./'+randomNam);}
    break; 



 



      // Other commands

        case "s": case "sticker": 
{
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

if(!msgDreaded) { m.reply('Quote an image or a short video.') ; return } ;
let media;
if (msgDreaded.imageMessage) {
     media = msgDreaded.imageMessage
  } else if(msgDreaded.videoMessage) {
media = msgDreaded.videoMessage
  } 
 else {
    m.reply('That is neither an image nor a short video! '); return
  } ;

var result = await client.downloadAndSaveMediaMessage(media);

let stickerResult = new Sticker(result, {
            pack: packname,
            author: author,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
const Buffer = await stickerResult.toBuffer();
          client.sendMessage(m.chat, { sticker: Buffer }, { quoted: m });

}
break;
          case "dp": { 
 try { 
 ha = m.quoted.sender; 
 qd = await client.getName(ha); 
 pp2 = await client.profilePictureUrl(ha,'image'); 
 } catch {  
 pp2 = 'https://tinyurl.com/yx93l6da'; 
 } 
  if (!m.quoted) throw `Tag a user!`; 
 bar = `Profile Picture of ${qd}`; 
 client.sendMessage(m.chat, { image: { url: pp2}, caption: bar, fileLength: "999999999999"}, { quoted: m}); 
 } 
 break;

case "list": case "vars":
let vaa = `𝟏 𝐍𝐢𝐜𝐤➣ 𝐆𝐞𝐭 𝐍𝐢𝐜𝐤_𝐇𝐮𝐧𝐭𝐞𝐫  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤`
reply(vaa)
break;

  case "vv": case "retrieve":{

if (!m.quoted) return m.reply("Quote a viewonce media!")

if (m.quoted.message) {
            let type = Object.keys(m.quoted.message)[0]
            let q = m.quoted.message[type]
            let media = await client.downloadMediaMessage(q)
            if (/video/.test(type)) {


               await client.sendMessage(m.chat, { video: media, caption: `Retrieved by Raven! ♊\nOriginal caption: ${q.caption}`}, { quoted: m})

            } else if (/image/.test(type)) {

await client.sendMessage(m.chat, { image: media, caption: `Retrieved by Raven! ♊\nOriginal caption: ${q.caption}`}, { quoted: m})

            }
         } else m.reply("That is not a viewonce media. . .")

      } 
	break;

case "take": {
try {

  if (!m.quoted) return reply('Quote a sticker!')
  let fortunx = await client.getName(sender);
  
  if (!/webp/.test(mime)) throw `Tag sticker with caption  ${prefix + command}`;
  if (m.quoted.isAnimated === true) {
  client.downloadAndSaveMediaMessage(quoted, "gifee");
  client.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m});
  } else if (/image/.test(mime)) {
  let mediax = await quoted.download();
  let encmediax = await client.sendImageAsSticker(m.chat, mediax, m, { packname: fortunx, author: fortunx });
  await fs.unlinkSync(encmediax);



} else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Not long than 10 seconds!');
  let mediaxx = await quoted.download();
  let encmediaxx = await client.sendVideoAsSticker(m.chat, mediaxx, m, { packname: fortunx, author: fortunx });
  await fs.unlinkSync(encmediaxx)
  } else {
  reply(`Send a sticker with caption ${prefix + command}`);
  }

} catch (errr) { 
 await reply("Something went wrong! Looks like I am unable to convert animated stickers?")}

  }
break;
 
         case 'song': {
if (!text) return reply(`Where is your song name? Example : ${prefix + command} Alan walker faded`);
const yts = require("youtube-yts");
let search = await yts(text);
let anup3k = search.videos[0];
if (!anup3k) return reply("Song not found,,try another .....!");
const apiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(anup3k.url)}`;
let audioResponse;
try {
audioResponse = await axios.get(apiUrl);
} catch (error) {
console.error("Error fetching audio:", error);
return reply("Failed to download the audio. Please try again.");
}
if (!audioResponse.data.status) {
return reply("Failed to retrieve audio URL. Please try again.");
}
const mp3Url = audioResponse.data.result.mp3;
// Download the MP3 file
let mp3Buffer;
try {
const mp3DownloadResponse = await axios.get(mp3Url, { responseType: 'arraybuffer' });
mp3Buffer = Buffer.from(mp3DownloadResponse.data);
} catch (error) {
console.error("Error downloading MP3:", error);
return reply("Failed to download the MP3. Please try again Later.");
}
await client.sendMessage(m.chat, {
audio: mp3Buffer,
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
externalAdReply: {
title: anup3k.title,
body: "RAVEN-BOT",
thumbnail: await fetch(anup3k.thumbnail), // Use thumbnail from the search result
mediaType: 2,
mediaUrl: anup3k.url,
}
},
}, { quoted: m });
}
break;
 
       case "play":
		      {
	if (!text) return reply('Which song do you want to download?');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	const yts = require("youtube-yts");
	let search = await yts(text);
	let telaso = search.all[0].url;
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await client.sendMessage(m.chat, {
  document: {url: kyuu.result.mp3},
mimetype: "audio/mp3",
 fileName: `${kyuu.result.title}.mp3`,
 contextInfo: {
        externalAdReply: {
          title: 'RAVEN-BOT',
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    client.sendMessage(m.chat, { react: { text: '🎶', key: m.key }})
}
break; 

case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
        let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

case "ytmp3": {
if (!text) return m.reply("Provide a valid YouTube link!")

	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return m.reply('Is this a YouTube link ?');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return m.reply('Invalid URL index');
	await downloadMp3(urls);





async function downloadMp3 (link) {
try {

let data = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)

await client.sendMessage(m.chat, {
 audio: {url: data.result.mp3},
mimetype: "audio/mp3",
 fileName: `${data.result.title}.mp3`
 
    }, { quoted: m });

await client.sendMessage(m.chat, {
 document: {url: data.result.mp3},
mimetype: "audio/mp3",
 fileName: `${data.result.title}.mp3`
 
    }, { quoted: m });
  } catch (error) {
    console.error('Error fetching the song:', error);
    await m.reply(`Error.`)
  }
}




}
break;
  
case 'ytmp4':
case "ytv": {
if (!text) return m.reply("Provide a valid YouTube link!")

	let urls = text.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
	if (!urls) return m.reply('Is this a YouTube link ?');
	let urlIndex = parseInt(text) - 1;
	if (urlIndex < 0 || urlIndex >= urls.length)
		return m.reply('Invalid URL index');
	await downloadMp4(urls);





async function downloadMp4 (link) {
try {

let data = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)

await client.sendMessage(m.chat, {
 audio: {url: data.result.mp4},
mimetype: "video/mp4",
 fileName: `${data.result.title}.mp4`
 
    }, { quoted: m });

await client.sendMessage(m.chat, {
 document: {url: data.result.mp4},
mimetype: "video/mp4",
 fileName: `${data.result.title}.mp4`
 
    }, { quoted: m });
  } catch (error) {
    console.error('Error fetching the song:', error);
    await m.reply(`Error.`)
  }
}




}
break;
          
    case "video": {
const yts = require("yt-search");
try {

if (!text) return m.reply("Which video do u want to download ?")

let search = await yts(text);
        let link = search.all[0].url;

        let data = await fetchJson (`https://widipe.com/download/ytdl?url=${link}`)
await client.sendMessage(m.chat, {
  video: {url: data.result.mp4},
mimetype: "video/mp4",
 fileName: `${data.result.title}.mp4`}, { quoted: m });

await client.sendMessage(m.chat, {
 document: {url: data.result.mp4},
mimetype: "video/mp4",
 fileName: `${search.all[0].title}.mp4` }, { quoted: m });


} catch (error) {

m.reply("Download failed\n" + error)

}

}
break;

case "ping": case "speed": {
               m.reply (`*𝐑𝐚𝐯𝐞𝐧 𝐬𝐩𝐞𝐞𝐝 𝐢𝐬: ${dreadedspeed.toFixed(4)} _𝐦𝐬_*`); 
         } 
 break; 
  
 case "runtime": case "uptime": { 
                 m.reply (`Bot Raven is active for ${runtime(process.uptime())}`) 
 } 
 break;

case "alive": { 
  
 client.sendMessage(m.chat, { video: { url: 'https://i.imgur.com/JqnCmAX.mp4' }, caption: `Hey @ ${m.pushName}, 𝐑𝐀𝐕𝐄𝐍 Has been alive since  ${runtime(process.uptime())}`, fileLength: "9999999999898989899999999" }, { quoted: m }); 
 }
break;
  case "apk":
      case "app":{
          if (!text) return reply("Where is the app name?");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await client.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `RAVEN-BOT`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;

          case "mix": {
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');

const axios = require("axios");
if (!text) return m.reply("No emojis provided ? ")


  const emojis = text.split('+');

  if (emojis.length !== 2) {
    m.reply("Specify the emojis and separate with '+'");
    return;
  }

  const emoji1 = emojis[0].trim();
  const emoji2 = emojis[1].trim();

  try {
    const axios = require('axios');
    const response = await axios.get(`https://levanter.onrender.com/emix?q=${emoji1}${emoji2}`);

    if (response.data.status === true) {
    

      let stickerMess = new Sticker(response.data.result, {
        pack: botname,
        type: StickerTypes.CROPPED,
        categories: ["🤩", "🎉"],
        id: "12345",
        quality: 70,
        background: "transparent",
      });
      const stickerBuffer2 = await stickerMess.toBuffer();
      client.sendMessage(m.chat, { sticker: stickerBuffer2 }, { quoted: m });

    } else {
      m.reply("Unable to create emoji mix.");
    }
  } catch (error) {
    m.reply("An error occurred while creating the emoji mix." + error );
  }


	  }
	  break;
          case "lyrics": 
 try { 
 if (!text) return reply("Provide a song name!"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break 
        case "toimage": case "photo": { 
    if (!quoted) throw 'Tag a static video with the command!'; 
    if (!/webp/.test(mime)) throw `Tag a sticker with ${prefix + command}`; 
  
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    let mokaya = await getRandom('.png'); 
    exec(`ffmpeg -i ${media} ${mokaya}`, (err) => { 
   fs.unlinkSync(media); 
   if (err) throw err 
   let buffer = fs.readFileSync(mokaya); 
   client.sendMessage(m.chat, { image: buffer, caption: `*_𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐞𝐝 𝐛𝐲 𝐑𝐚𝐯𝐞𝐧 🦄_*`}, { quoted: m }) 
   fs.unlinkSync(mokaya); 
    }); 
    } 

break;
case "movie": 
             if (!text) return reply(`Provide a series or movie name.`);  
              let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);  
              let imdbt = "";  
              console.log(fids.data)  
              imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB MOVIE SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";  
              imdbt += "🎬Title      : " + fids.data.Title + "\n";  
              imdbt += "📅Year       : " + fids.data.Year + "\n";  
              imdbt += "⭐Rated      : " + fids.data.Rated + "\n";  
              imdbt += "📆Released   : " + fids.data.Released + "\n";  
              imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n";  
              imdbt += "🌀Genre      : " + fids.data.Genre + "\n";  
              imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n";  
              imdbt += "✍Writer     : " + fids.data.Writer + "\n";  
              imdbt += "👨Actors     : " + fids.data.Actors + "\n";  
              imdbt += "📃Plot       : " + fids.data.Plot + "\n";  
              imdbt += "🌐Language   : " + fids.data.Language + "\n";  
              imdbt += "🌍Country    : " + fids.data.Country + "\n";  
              imdbt += "🎖️Awards     : " + fids.data.Awards + "\n";  
              imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n";  
              imdbt += "🏙️Production : " + fids.data.Production + "\n";  
              imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n";  
              imdbt += "❎imdbVotes  : " + fids.data.imdbVotes + "";  
             client.sendMessage(from, {  
                  image: {  
                      url: fids.data.Poster,  
                  },  
                  caption: imdbt,  
              },  
                 { quoted: m }); 
  
  
          break;
        
        
                                   
             case "linkgroup": case "link": { 
                 if (!m.isGroup) throw group; 
                 if (!isBotAdmin) throw botAdmin; 
                 let response = await client.groupInviteCode(m.chat); 
                 client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
 break;
 
      case "nick": case "owner": 
 client.sendMessage(m.chat, { video: { url: 'https://i.imgur.com/RNCiPJR.mp4' }, caption: `Here is My Owner contact🔥 https://wa.me/message/YNDA2RFTE35LB1` }, {quoted: m}); 
  
 break;
       


        //OWNER COMMANDS

          case 'botpp': { 
    if (!Owner) throw NotOwner; 
    if (!quoted) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (!/image/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    if (/webp/.test(mime)) throw `Tag an image you want to be the bot's profile picture with ${prefix + command}`; 
    let media = await client.downloadAndSaveMediaMessage(quoted); 
    await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media)); 
    reply `Bot's profile picture has been successfully updated!`; 
    } 
    break;

          case 'broadcast': { 
         if (!Owner) { 
             throw NotOwner
             return; 
         } 
         if (!text) { 
             reply("❌ No broadcast message provided!") 
             return; 
         } 
         let getGroups = await client.groupFetchAllParticipating() 
         let groups = Object.entries(getGroups) 
             .slice(0) 
             .map(entry => entry[1]) 
         let res = groups.map(v => v.id) 
         reply(` Broadcasting in ${res.length} Group Chat, in ${res.length * 1.5} seconds`) 
         for (let i of res) { 
             let txt = `*_</ 𝐑𝐀𝐕𝐄𝐍 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 >\n\n🀄 Message: ${text}\n\nAuthor: ${pushname}_*` 
             await client.sendMessage(i, { 
                 image: { 
                     url: "https://telegra.ph/file/416c3ae0cfe59be8db011.jpg" 
                 }, 
                 caption: `${txt}` 
             }) 
         } 
         reply(`Broadcasted to ${res.length} Groups.`) 
     } 
 break;
 case "gemini": {

    try {
        if (!text) return m.reply("This is Raven, an AI using Gemini APIs to process text, provide yr query");

       
        const { default: Gemini } = await import('gemini-ai');

        const gemini = new Gemini("AIzaSyCcZqDMBa8FcAdBxqE1o6YYvzlygmpBx14");
        const chat = gemini.createChat();

        const res = await chat.ask(text);

        await m.reply(res);
    } catch (e) {
        m.reply("I am unable to generate responses\n\n" + e);
    }
}
break;
      
        case "setvar": 
 if (!Owner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  
  
  
  
 break; 
 

          case "block": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 
 await client.updateBlockStatus(users, 'block'); 
 m.reply (`Blocked!`); 
 } 
 break; 
  
 case "unblock": { 
 if (!Owner) throw NotOwner; 
 if (!m.quoted) throw `Tag someone!`; 
 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'; 
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`Unblocked!`); 
 } 
 break;

          case 'join': { 
                 if (!Owner) throw NotOwner
                 if (!text) return reply("provide a valid group link") 
                 let result = args[0].split('https://chat.whatsapp.com/')[1] 
                 await client.groupAcceptInvite(result).then((res) =>  reply(jsonformat(res))).catch((err) =>reply(`Link has problem.`)) 
  
             } 
  
  
 break;
 
        case 'gpt':
      {
        if (!text) return reply(`Hello Am RAVEN AI developed by Nick.How can i help u?`);
          let d = await fetchJson(
            `https://bk9.fun/ai/gptt4?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
      }
break;
/*
case "g":

const {
  Configuration,
  OpenAIApi
} = require("g");

// Function to save a conversation to the database
async function saveConversation(text) {
  await db.set("conversation", [{ role: "user", content: text }]);
}

// Function to get a conversation from the database
async function getConversation() {
  return await db.get("conversation") || [];
}

// Handler for the "gpt" or "g" case
async function handleGPTMessage(text, m) {
  if (!text) return m.reply("Hello am 𝐂𝐑𝐎𝐖𝐍 an Ai developed by 𝐒𝐢𝐫𝐦, how can I help you today?");

  const configuration = new Configuration({
    apiKey: setting,
  });

  const gpt = new OpenAIApi(configuration);

  // Get the previous conversation history from the database
  const previousMessages = await getConversation();

  // Add the user's new message to the conversation
  previousMessages.push({ role: "user", content: text });

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: previousMessages, // Include the entire conversation history
    });

    // Extract and send the model's reply
    const modelReply = response.data.choices[0].message.content;
    m.reply(modelReply);

    // Save the updated conversation history to the database
    await saveConversation(text); // Store only the latest user message
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      console.log(`${error.response.status}\n\n${error.response.data}`);
    } else {
      console.log(error);
      m.reply("I'm Facing An Error: " + error.message);
    }
  }
}



          
          break;*/
        case "img": case "ai-img": case "image": case "images":
          try {
            if (setting === "ADD OPENAI API KEY") return reply("I need an openAi API key in my .env file.");
            if (!text) return reply(`This will generate an AI-BASED image. Note that image generated might not be realistic.`);
            const configuration = new Configuration({
              apiKey: setting,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("An error has occurred:"+ error.message);
          }
        }
break;
        default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Dreaded", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Dreaded", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});


