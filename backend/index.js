const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
const clerkWebhook = require('./controller/webhook');
require('dotenv').config()


const app = express();


app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000
dbConnect()

app.get('/', (req,res)=>{
    res.send('Api working');
})
app.post('/clerk', express.json(), clerkWebhook)

app.listen(PORT,()=>{
    console.log(`Api is working on ${PORT}`)
})