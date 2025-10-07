import axios, { Axios } from "axios";
import { toast } from "react-toastify";
const url = "http://localhost:5001/auth/sign-in"


function LoginService(userCredentials,login){
    axios.post(url,userCredentials).then((res)=>{
        if(res.data.ok){
            toast.success("User loggedIn",{
                autoClose:500
            })
            setTimeout(()=>{
                login()
            },500)
        }else{
            throw Error(res.data.err)
        }
    }).catch((error)=>{
        toast.error("invalid username and password")
    })
}

export default LoginService