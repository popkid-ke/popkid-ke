"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "wagroup", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*POP-KID-KE BOT*\n\n👋Hello,,Click The link below to Join *POP KID BOT* WhatsApp Testing Group\n\n';
    let d = 'https://chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI\n\nJoin the group and wait for updates from the admin,Thank you. \n\n\n> I AM POP KID KE';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
