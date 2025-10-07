import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css";
import { useContext } from "react";
import myContext from "./context-API/context";

function Navbar() {

    const { logout } = useContext(myContext)

    return (
        <div className="container-fluid ">
            <div className="row" style={{ height: "90px" }}>
                <div className="col-1 d-flex h-100 align-items-center justify-content-centers" style={{ backgroundColor: "black" }}>
                    <img src="https://marketplace.canva.com/EAFDiSOrfbg/1/0/1600w/canva-grey-professional-monogram-circular-brand-logo-NodzyaZfsGM.jpg" alt="" width={73} height={73} />
                </div>
                <div className="col-8" style={{ backgroundColor: "black" }}>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/Products">Pruducts</Link>
                        <Link to="/Profile">Profile</Link>
                        <Link to="/Sign-in">Sign-in</Link>
                        <Link to="/Sign-up">Sign-up</Link>
                        <Link to="/Contact us">Contact us</Link>
                    </div>
                </div>
                <div className="col-3" style={{ backgroundColor: "black" }}>
                    <div className="row" style={{ height: "90px" }}>
                        <div className="col-4 ">
                            <div className="logo1">
                                {/* <i class="bi bi-bag-heart-fill" ></i> */}
                                <Link to="/cart"><i class="bi bi-bag-check" style={{ color: "silver" }}></i></Link>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="logo2">
                                <i class="bi bi-person-circle" style={{ color: "silver" }}></i>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="btt">
                                <Link to="/">
                                    <button onClick={() => {
                                        logout()
                                    }}>Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar;