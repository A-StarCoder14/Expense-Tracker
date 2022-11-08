import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
import {formatCurr} from "../formatCurr"


function Balance() {

const {transactions} = useContext(GlobalContext)

  
 const amounts = transactions.map(transactions => parseInt(transactions.amount))


  const balance = amounts.reduce((total, amount)=> total + amount,0)



  return (
  <>
  <h4>Your Balance:</h4>
  <h1>{formatCurr(balance)}</h1>
  </>
  )
}

export default Balance