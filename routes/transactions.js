const express = require("express")
const {getTransactions, deleteTransactions, postTransaction} = require('../controllers/transactions')
const router = express.Router()



router.route('/').get(getTransactions).post(postTransaction)


router.route('/:id').delete(deleteTransactions)






module.exports = router