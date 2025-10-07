import axios from "axios";
import { toast } from "react-toastify";


function signupService(input){
    axios.post("http://localhost:5001/auth/sign-up",input).then((res)=>{
        if(res.data.ok){
            alert("success")
            toast.success("Account created",{autoClose:700})
        }else{
            throw Error(res.data.error)
        }
    }).catch((error)=>{
        alert("something went wrong")
        toast.error(error.message)
    })
}

export default signupService