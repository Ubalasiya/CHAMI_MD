const l = console.log
const config = require('../settings')
const { cmd, commands } = require('../lib/command')
cmd({
    pattern: "alive",
    alias: "bot",
    react: "👻",
    desc: "Check if Chami bot is online.",
    category: "main",
    filename: __filename
}, async (gojo, mek, m, {
    from, reply
}) => {
    try {
        // Send image + caption
        await gojo.sendMessage(from, {
            image: { url: "https://ik.imagekit.io/rmlbayysp/1749649243760-file_000000006ec061f780dc9bcb7a54e549_McROR3W9c.png" },
            caption: `⚡ CHAMI MD is ALIVE ⚡\n\nSystem Status: ONLINE ✅\nBot Power Level: ∞\n\nCreated & Managed by: sayura\n\nType .menu to explore commands!`
        }, { quoted: mek });

        // Send voice message (PTT style)
        await gojo.sendMessage(from, {
            audio: {
                url: "https://github.com/gojo18888/Photo-video-/raw/refs/heads/main/gojo-satoru%20(1).mp3"
            },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("Error in .alive command:\n" + e);
    }
});
