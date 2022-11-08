import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import Transactions from './Transactions'
import { useEffect } from 'react'
import { useMemo } from 'react'

export default function TransactionList() {

  const {transactions, addTransaction} = useContext(GlobalContext)





  useEffect(()=> {
    
   
    addTransaction()

    // eslint-disable-next-line react-hooks/exhaustive-deps

  },[])



  return (
    <>
        <h3>History</h3>
        <ul className='list'>
            
            {
              transactions.map(trans => {
                return(
                  <Transactions key={trans.id} trans={trans} />
                ) 
              })
            }
        </ul>
    </>
  )
}
