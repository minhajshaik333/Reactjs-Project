import axios from "axios";
import { toast } from "react-toastify";
import ReduxStore from "../../../components/redux/store/ReduxStore";

export function getCartsData(){
    axios.get("http://localhost:5001/cart/get-carts-data").then((res)=>{
       if(res.data.ok){
        ReduxStore.dispatch({type:"get-cart",payload:res.data.res})
       }else{
        throw Error("Failed to access the cart details")
       }

    }).catch((error)=>{
        toast.error(error.message)
    })
}

export function removeFromCart(id){
    axios.delete(`http://localhost:5001/cart/remove-from-cart/${id}`).then((res)=>{
        if(res.data.ok){
            toast.success("Product removed from the cart",{autoClose:500})
            getCartsData
        }else{

        }
    }).catch((error)=>{
        toast.error(error.message)
    })

}