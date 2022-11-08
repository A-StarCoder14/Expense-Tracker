const mongoose = require("mongoose")

const connectdb = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
        await console.log(`Successfuly Connected to MongoDB: ${connect.connection.host}}`.bgCyan.underline.bold)
    } catch (error) {
       await console.log(error.message.red)
       process.exit(1)
    }
}


module.exports = connectdb