import { createContext, useReducer } from "react"
import { AppReducer } from "./AppReducer"
import { ACTION } from "./Actions"

const initialState = {
    transactions: [],
    loading: true,
    error: []
}



export const GlobalContext = createContext(initialState)


export function GlobalProvider({children}){

    const [state, dispatch] = useReducer(AppReducer, initialState)


    //Actions

    function addTransaction(){
     fetch('/api/v1/transactions')

        .then(res => res.json())
        .then(data => dispatch({
            type: ACTION.GET_TRANS,
            payload: {
                data: data.data
            }
        }))
        .catch(err => console.log(err))
    }



  async function deleteTransaction(id){
    
    try {
       await fetch(`/api/v1/transactions/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error)
    }


    dispatch({
        type: ACTION.DELETE_TRANS,
        payload: {
            id
        }
    })
  }

 async function postTransaction(transactions){
   
    try {
    const res = await fetch(`/api/v1/transactions/`,{
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(transactions)
               
            })
           
            const data = await res.json()
            console.log('Data',data)

            if(transactions.text === "") return window.alert(data.message)

            dispatch({
                type: ACTION.POST_TRANS,
                payload: {
                   transactions: data.data
                }
            })
          
        

         } catch (error) {
        
         window.alert(error)
         console.log(error)
     }}



  


return(

    
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        loading: state.loading,
        deleteTransaction,
        postTransaction,
        addTransaction,
        error: state.error
    }}>
        {children}
    </GlobalContext.Provider>

)
 }