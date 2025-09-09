const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('db connected successfully')
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports = connectDb