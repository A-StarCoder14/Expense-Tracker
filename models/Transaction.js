const mongoose = require('mongoose')


const schema = mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add a text...']
    },
    amount: {
        type: Number,
        required: [true, "Please add an amount..."],
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("transaction", schema)