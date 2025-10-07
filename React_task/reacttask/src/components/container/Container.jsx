
import Home from "../Home"
import { useContext } from "react"
import myContext from "../context-API/context"
import Products from "../../pages/products/Products.jsx"
import Profile from "../../pages/profile/Profile.jsx"
import Signin from "../../pages/signin/Signin.jsx"
import Signup from "../../pages/signup/Signup.jsx"
import ProductsDetail from "../../pages/products-detai/ProductsDetail.jsx"
import Contact from "../../pages/contact/Contact.jsx"
import Cart from "../../pages/products/cart/Cart.jsx"
import { Routes, Route, Navigate } from "react-router-dom"

function Container() {

    const { loggedIn } = useContext(myContext)
    return (<div>
        <Routes>
            <Route path={"/"} element={loggedIn ? <Home /> : <Signin />} />
            <Route path={"/Products"} element={<Products />} />
            <Route path={"/Profile"} element={<Profile />} />
            <Route path={"/Sign-up"} element={<Signup />} />
            <Route path={"/ProductsDetail/:id"} element={loggedIn ? <ProductsDetail /> : <Navigate to="/" />} />
            <Route path={"/Contact us"} element={<Contact />} />
            <Route path={"/cart"} element={loggedIn ? <Cart /> : <Navigate to="/" />} />
        </Routes>
    </div>)
}

export default Container