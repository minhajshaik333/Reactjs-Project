import Navbar from "./components/Navbar";
import { useState } from "react";
import Foot from "./components/Footer";
import Container from "./components/container/Container.jsx";
import myContext from "./components/context-API/context.js";
import BgWallpaper from "./pages/bgwallpaper/BgWallpaper.jsx";
import { ToastContainer } from 'react-toastify';

function App() {
    const [loggedIn, setLoggedIn] = useState(() => {
        if (localStorage.getItem("login") == true) {
            return true
        } else {
            return false
        }
    })


    //Creating login and logout function :
    const login = function () {
        localStorage.setItem("login", true)
        setLoggedIn(true)
    }
    const logout = function () {
        localStorage.setItem("login", false)
        setLoggedIn(false)
    }

    return (
        <div>
            {/* <BgWallpaper /> */}
            <ToastContainer />
            <myContext.Provider value={{ loggedIn, login, logout }}>
                {
                    loggedIn ? <Navbar /> : null
                }
                <Container />
                <Foot />
            </myContext.Provider>

        </div>
    )
}
export default App;