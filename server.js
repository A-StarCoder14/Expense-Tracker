const path = require('path')
const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const mongoose = require("mongoose")
dotenv.config({path: "./config/config.env"})
const transactions = require('./routes/transactions')
const connectdb = require("./config/db")
const app = express()



//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//DB Config
connectdb()


//morgan
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}



app.use('/api/v1/transactions', transactions)



//Check for Production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static( "client/build"));


    app.get('*', (req,res)=> res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
}




const PORT = process.env.PORT || 5500

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold))