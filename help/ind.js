exports.wait = () => {
    return `⏳ ඩවුන්ලෝඩ් කරමින් පවතී`
}

exports.ok = () => {
    return `✅ සාර්ථකය~`
}

exports.err = () => {
    return `‼️දෝශයකි‼️

⏳හිමිකරු වෙත විශේෂාංග දෝෂයක් වාර්තා කිරීම⏳`
}

exports.wrongFormat = (prefix) => {
    return `විධානය සොයා ගත නොහැක ‼️ මෙනුව සදහා= *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `⚠️ වචන ඇතුලත් කරන්න⚠️`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ විධානය සොයාගත නොහැක *${cmd}* මෙනුව සදහා *${prefix}allmenu* සෙන්ඩ් කරන්න`
}

exports.ownerOnly = () => {
    return `⚠️ අයිතිකරුට පමනි ⚠️`
}

exports.doneOwner = () => {
    return `✔  ️සාර්තකයි අයිතිකරුනි`
}

exports.groupOnly = () => {
    return `👥  සමූහ සදහා පමනක් වන විධානයකි!`
}

exports.adminOnly = () => {
    return `🙅  සමූහ ඇඩ්මින් සදහා පමනක් වන විධානයකි!`
}

exports.nhFalse = () => {
    return `වලංගු නොවේ!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ ඔබ ඇඩ්මින් වරයකු නොවේ! ❎`
}

exports.adminAlready = () => {
    return `⚠️ මොහු පෙර සිට ඇඩ්මින් වරයෙකි! ⚠️`
}

exports.botNotAdmin = () => {
    return `බොට් ඇඩ්මින් වරයකු නොවේ! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
වාර්තා කිරීම ගැන ඔබට ස්තුතියි, ඔබගේ වාර්තාව අපට ඉක්මනින් ලැබෙනු ඇත.`
}

exports.videoLimit = () => {
    return `ප්‍රමානය ඉහල වේ!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `
*Selamat ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 BOTKINGDOM Beta :*

🤖 *INFO*
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}donate
└──────

🧑 *OWNER*
├ > evaluate
├ $ exec
├ ${prefix}join link
├ ${prefix}setppbot (tag/send image)
└──────

⚙️ *GROUP*
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}group open/close
├ ${prefix}tagall text
├ ${prefix}hidetag text
└──────

😷 *WEEBS*
├ ${prefix}anime query
├ ${prefix}manga query
├ ${prefix}character query
└──────

🔍 *MISC*
├ ${prefix}film query
├ ${prefix}wattpad query
├ ${prefix}webtoons query
├ ${prefix}drakor query
├ ${prefix}pinterest query
└──────

🎞 *MEDIA*
├ ${prefix}toimg (tag sticker)
└──────

⬇️ *DOWNLOADER* 
├ ${prefix}tiktok link
├ ${prefix}ytdl link
├ ${prefix}ytmp3 link
├ ${prefix}ytmp4 link
├ ${prefix}ytdl link
├ ${prefix}facebook link
├ ${prefix}twitter link
├ ${prefix}instagram link
└──────

🙏 *THANKS*
├ https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV
└──────

    `
}

exports.rules = (prefix) => {
    return `
*── 「 නීති」 ──*

1. don't spam bot. 🙅
😒: *⚠️ WARN/SOFT BLOCK*

2. don't call bot. ☎️
😒: *❎ SOFT BLOCK*
සමූහ සදහා ඇඩ් කිරීමට අවශ්‍යය නම් ඔව්නර් වෙත දැනුම් දෙන්න
.owner යොදා ගන්න

🙏


    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 08127668234 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

    `
}
