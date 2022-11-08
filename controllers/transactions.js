const { findByIdAndDelete } = require('../models/Transaction')
const Transaction = require('../models/Transaction')



//@desc GET all transactions
//@Route /api/v1/transactions
//Method GET acces: Public

exports.getTransactions = async(req, res, next) => {

   try {
    const transactions = await Transaction.find()
    res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions
    })
   } catch (error) {
    res.status(500).json("Server Error!!!!")
   }
}

//@desc Add transactions
//@Route /api/v1/transactions
//Method POST acces: Public

exports.postTransaction = async(req, res, next) => {

try {

    const transaction = await Transaction.create(req.body)  

    return res.status(201).json({
        success: true,
        data: transaction
    })
    
} catch (error) {
  if(error.name === 'ValidationError'){
    const message = Object.values(error.errors).map(val => val.message)
   return res.status(400).json({
        message: message
    })
}else {
   return res.status(500).json({
        message: "Something Went Wrong! Sorry try again later!"
    })
}
}




}


//@desc GET all transactions
//@Route /api/v1/transactions/:id
//Method DELETE access: Public
exports.deleteTransactions = async(req, res, next) => {
   try {
    const transaction =  await Transaction.findById(req.params.id)

    if(!transaction){
       return res.status(400).json({
            success: false,
            message: "Transaction not found"
        })
    }
       else{ await transaction.remove() }

    res.status(200).json({
        success: true,
        data: `Transaction id:${req.params.id} Successfully Deleted`
    })
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "Server Error"
    })
   }
}