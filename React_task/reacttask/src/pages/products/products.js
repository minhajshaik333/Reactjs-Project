import axios from "axios";
import { toast } from "react-toastify";

export function getProducts(setState){
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        // alert("successfully connected")
        console.log(res.data)
        setState(res.data)
    }).catch((error)=>{
        console.log(error)
    })
}

export function filterProducts(category,setState){
    if(category){
        axios.get("https://fakestoreapi.com/products").then(function(res){
        setState(res.data.filter(function(product){
            return product.category==category
        }))
    }).catch(function(error){
        console.log(error)

    })
    }else{
        getProducts(setState)
    }
}

export function addToCart(product,dispatch){
    axios.post("http://localhost:5001/cart/add-to-cart",product).then((res)=>{
        if(res.data.ok){
            dispatch({type:"add-to-cart",payload:product})
        }else{

        }
    }).catch((error)=>{
        toast.error(error.message)

    })
    
}