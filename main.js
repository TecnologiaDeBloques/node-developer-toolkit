// Libraries
const express = require('express')
const nacl = require('tweetnacl')
nacl.util = require('tweetnacl-util')
const toUint8Array = require('base64-to-uint8array')

// Consts
const app = express()
const port = 8081

// Router
app.get('/signature/:privateKey', (req, res) => {
    try {
        const signature = Sign(req.params.privateKey);
        res.json({ "signature": signature });
    } catch {
        res.json({ "error": "Invalid or missing key" });
    }
})

function decodePrivateKey(string) {
    return toUint8Array(string)
}

function keyPairFromPrivateKey(privateKey) {
    return nacl.sign.keyPair.fromSecretKey(privateKey)
}

function generateTimeSignature(keyPair, period) {
    const now = Math.floor(Date.now() / 1000)
    const counter = Math.floor(now / period)

    const message = nacl.util.decodeUTF8(counter.toString())
    const signature = nacl.sign.detached(message, keyPair.secretKey)
    return nacl.util.encodeBase64(signature)
}

function Sign(privateKey) {
    const keyPair = keyPairFromPrivateKey(decodePrivateKey(privateKey))
    return generateTimeSignature(keyPair, 30)
}

// Main
app.listen(port, () => console.log(`Econic Developer Tools: listening on port ${port}!`))
