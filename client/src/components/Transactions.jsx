import React from 'react'
import {formatCurr} from "../formatCurr"
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'





export default function Transactions({trans}) {

   const {deleteTransaction} = useContext(GlobalContext)


    const Minus = () => {
        return trans.amount.toString().startsWith("-")
    }






  return (
    <>

        <li className={Minus() ? "minus" : "plus"} key={trans.id}>
         {trans.text}
         <span>{formatCurr(trans.amount)}</span>
         <button onClick={()=> deleteTransaction(trans._id)} className='delete-btn'>x</button>
         </li>
    </>
  )
}
