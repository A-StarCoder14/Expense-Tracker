import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTransaction() {
  const [text, setText] = useState("")

  const [amount, setAmount] = useState(0)

  const {postTransaction} = useContext(GlobalContext)


  function handleAdd(e){
    e.preventDefault()



    const newTransaction ={
      id: Date.now(),
      text,
      amount: +amount
    }
  console.log(newTransaction)
    postTransaction(newTransaction)

    setText("")
    setAmount(0)
  }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleAdd}>
            <div className='form-control'>
                <label htmlFor="text">Text:</label>
                <input type="text" id='text' placeholder='Enter Text...' value={text} onChange={(e)=> setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount: <br />
                (negative - expense, positive - income)</label>
                <input type="number" id='amount' placeholder='Enter Amount...' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
            </div>
            <button type='submit' className='btn'>Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction