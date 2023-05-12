const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())




const loginRouter = require('./router/Login')





app.use('/api',loginRouter)

const Prot = 7777

app.listen(Prot,()=>{
    console.log("http://127.0.0.1:7777")
})
