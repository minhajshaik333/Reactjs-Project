import { Link } from "react-router-dom";
import "./Signup.css"
import signupService from "./signupService";
import { useRef } from "react";
import { toast } from "react-toastify";

function Signup() {

    const fNameRef = useRef(null)
    const cityRef = useRef(null)
    const genderRef = useRef(null)
    const emailRef = useRef(null)
    const numberRef = useRef(null)
    const passwordRef = useRef(null)

    const createAccount = function () {

        signupService({
            name: fNameRef.current.value,
            city: cityRef.current.value,
            gender: genderRef.current.value,
            email: emailRef.current.value,
            number: numberRef.current.value,
            password: passwordRef.current.value,

        })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div id="column1" className="col-7 column" >
                </div>
                <div id="column2" className="col-5 column" >
                    <h1>Join The Fashion Community</h1>
                    <form>
                        <input ref={fNameRef} className="form-control" type="text" placeholder="ENTER NAME" />
                        <input ref={cityRef} className="form-control" type="text" placeholder="CITY" />
                        <input ref={genderRef} type="text" list="mylist" placeholder="SELECT GENDER" />
                        <datalist id="mylist">
                            <option>Male</option>
                            <option>Female</option>
                        </datalist>
                        <input ref={emailRef} className="form-control" type="email" placeholder="ENTER EMAIL" />
                        <input ref={numberRef} type="number" className="form-control" placeholder="PHONE NUMBER" />
                        <input ref={passwordRef} className="form-control" type="password" placeholder="PASSWORD" />

                        <button className=" btn1" type="submit" onClick={createAccount}>Create Account</button>
                        <button id="btn2" type="button">Continue with google</button>
                        <div className="log">
                            <Link to="/">
                                login
                            </Link>
                        </div>
                        <div className="para">Already have an account?</div>
                        <div id="logo"><i className="bi bi-google" style={{ color: "red" }}></i></div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup;