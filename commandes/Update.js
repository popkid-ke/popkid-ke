"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "wagroup", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*POP-KID-KE BOT*\n\n👋Hello,,Click The link below to Join *POP KID BOT* WhatsApp Testing Group\n\n';
    let d = 'https://chat.whatsapp.com/IwT9XmuZKhy61cLbsM1M6H\n\nJoin the group and wait for updates from the admin,Thank you. \n\n\n> I AM POP KID KE';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/c65b6194c718711f34f35.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

const { zokou } = require("../framework/zokou");
zokou({ nomCom: "channel", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*POP-KID-KE BOT*\n\n👋Hello,,Click The link below to Join *POP KID BOT* WhatsApp channel\n\n';
    let d = 'https://whatsapp.com/channel/0029VadQrNI8KMqo79BiHr3l\n\nMAKE SURE YOU FOLLOW FOR MORE UPDATES,Thank you. \n\n\n> I AM POP KID KE';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/c65b6194c718711f34f35.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");



const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "♻️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '👋Hello,I am *POP-KID BOT* developed by Popkid🍂\n*FORK AND STAR MY REPO FOR COURAGE*\n\n';
    let d = '★FORKS : 241\n★STARS : 456\n★RELEASED : 15.07.24\n★REPO:https://github.com/popkid-ke/popkid-ke\n★DEVELOPER : POP KID KE\n╚═══════════════╝';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
