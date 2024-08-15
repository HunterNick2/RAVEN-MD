(async()=>{
//const {bardAI,bardAsk} = require('./index.js')
const {bardAI,bardAsk} = require('g-bardai')
const fs = require('fs')

let sessionCokies = JSON.parse(fs.readFileSync('/storage/emulated/0/Download/bardSession.json'))

//Initiate bardAI login first
await new bardAI(sessionCokies).login()

//After login you can use bardAsk() function
res = await bardAsk('send the audio link if the music "DARK!" by GhostfacePlaya')

console.log(res)
})()