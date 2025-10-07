import {toast} from "react-toastify"

const CartReducer = function(state={name:"", cart:[]},action){
    if(action.type=="Name"){
        state = {
            ...state,
            name : action.data
        }
    }else if(action.type=="add-to-cart"){
        state = {
            ...state,
            cart:[...state.cart,action.payload]
        }

        toast("Product Added in the cart",{
            className:"notify",
            autoClose : 2000
        })}
        else if(action.type=="get-cart"){
        state = {
            ...state,
            cart:action.payload
        }
        
    }
    return state
}

export default CartReducer