import "./Signin.css"
import { useContext, useRef } from "react";
import myContext from "../../components/context-API/context";
import LoginService from "./loginService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Signin() {

    const { login } = useContext(myContext)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    return (
        <div className="container-fluid">
            <div className="row">
                <div id="part1" className="col-6 bg-primary ">
                    <h1>Hi there, Welcome!</h1>
                    <p>Want to create an account</p>
                    <Link to="/Sign-up"><button>Register</button></Link>
                </div>
                <div id="part2" className="col-6 ">
                    <h1>Login</h1>
                    <input ref={emailRef} className="form-control" type="email" placeholder="Email" />
                    <input ref={passwordRef} className="form-control" type="password" placeholder="Password" />
                    <a href="">forget password?</a>
                    <button onClick={() => {
                        if (emailRef.current.value == "" && passwordRef.current.value == "") {
                            toast.error("Enter the credentials", { autoClose: 900 })
                        } else {
                            LoginService(
                                {
                                    email: emailRef.current.value,
                                    password: passwordRef.current.value
                                }
                            )

                        }
                    }} >Login</button>
                    <p>Or login with the social platform</p>
                    <a href=""><i id="l1" className="bi bi-facebook"></i></a>
                    <a href=""><i id="l2" className="bi bi-google"></i></a>
                    <a href=""><i id="l3" className="bi bi-linkedin"></i></a>
                    <i id="l4" className="bi bi-person-fill"></i>
                    <i id="l5" className="bi bi-lock-fill"></i>
                </div>
            </div>
        </div >
    )
}

export default Signin;