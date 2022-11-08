import React, { useContext } from 'react'
import {GlobalContext} from "../context/GlobalState"
import {formatCurr} from "../formatCurr"


export default function Income() {

//Income Calculations
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transactions => transactions.amount)

  const positiveAmounts = amounts.filter(amount => amount >= 0 )

  const converted =  positiveAmounts.map(nums => parseInt(nums))


  const incomeTotal = converted.reduce((total, amount) => total += amount,0)


  //Expense Calculation
  const negativeAmounts = amounts.filter(amount => amount < 0 )


  const convertedNeg =  negativeAmounts.map(nums => parseInt(nums))

  const expenseTotal = convertedNeg.reduce((total, amount) => total += amount,0)



  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p className='money plus'>+{formatCurr(incomeTotal)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className='money minus'>{formatCurr(expenseTotal)}</p>
        </div>
    </div>
  )
}
