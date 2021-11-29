"use strict";
const { default: makeWASocket, BufferJSON, initInMemoryKeyStore, DisconnectReason, AnyMessageContent, delay, useSingleFileAuthState } = require("@adiwajshing/baileys-md")
const figlet = require("figlet");
const fs = require("fs");
const P = require('pino')
const ind = require('./help/ind')
const { color, ChikaLog } = require("./lib/color");
let setting = JSON.parse(fs.readFileSync('./config.json'));
let sesion = `./${setting.sessionName}.json`
const { state, saveState } = useSingleFileAuthState(sesion)

const start = async () => {
    //Meng weem
	console.log(color(figlet.textSync('Chika Bot MD', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ By Rashidsiregar28 ]'))
    // set level pino ke fatal kalo ga mau nampilin log eror
    const chika = makeWASocket({ printQRInTerminal: true, logger: P({ level: 'debug' }), auth: state }) 
    console.log(color('Connected....'))
    chika.multi = true
    chika.nopref = false
    chika.prefa = 'anjing'

    chika.ev.on('messages.upsert', async m => {
    	if (!m.messages) return
        const msg = m.messages[0]
        if (!msg.message) return
        require('./message/chika')(chika, msg, m, ind, setting)
    })

    chika.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            console.log(ChikaLog('Koneksi terputus....'))
            if (lastDisconnect.error?.output?.statusCode === DisconnectReason.loggedOut) console.log(ChikaLog('Wa web terlogout.'))
            else start()
        }
    })

    chika.ev.on('creds.update', () => saveState)

    return chika
}

start()
.catch(err => console.log(err))
