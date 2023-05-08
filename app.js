const express = require('express')

const app = express()

const Prot = 7777

app.listen(Prot,()=>{
    console.log("http://127.0.0.1:7777")
})
