import { ACTION } from "./Actions"

export function AppReducer(state, action){
    switch(action.type){
        case ACTION.GET_TRANS:
            return {
                ...state,
                loading: false,
                transactions: action.payload.data
            }
        
        case ACTION.DELETE_TRANS: 
            return {
                ...state,
                transactions: state.transactions.filter(trans => trans._id !== action.payload.id)
            }
        case ACTION.POST_TRANS:
            return {
                ...state,
                transactions: [...state.transactions, action.payload.transactions]
            }
        default: 
        return state
    }
}
