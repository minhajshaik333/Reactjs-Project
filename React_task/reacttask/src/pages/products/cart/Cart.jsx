import "./Cart.css"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { getCartsData, removeFromCart } from "./cart"


function Cart() {
    useEffect(() => {
        if (cartData.length == 0) {
            getCartsData()
        }
    }, [])
    const cartData = useSelector((store) => {
        return store.cart

    })
    return (
        <div className="cart-container">
            <div className="cartsec1">
                <div className="cart-head">
                    <section className="carth">Image</section>
                    <section className="carth">Product</section>
                    <section className="carth">Price</section>
                    <section className="carth">Quantity</section>
                    <section className="carth">Action</section>
                </div>
                <div className="cart-body">
                    {cartData.length > 0 ?
                        cartData.map(({ image, title, price, id }) => {
                            return <div className="cart-body-row">
                                <section className="cartr">
                                    <img style={{ borderRadius: 0 }} src={image} alt="" width={80} height={80} />
                                </section>
                                <section className="cartr">{title}</section>
                                <section className="cartr">{price}</section>
                                <section className="cartr">1</section>
                                <section className="cartr">
                                    <button className="remove" onClick={() => {
                                        removeFromCart(id)
                                    }}>Remove</button>
                                </section>
                            </div>
                        }
                        ) : <h1 style={{ fontWeight: "bolder", color: "red", textAlign: "center", marginTop: "290px" }}>Your cart is empty...</h1>
                    }
                </div>
            </div>
            <div className="cartsec2">2</div>

        </div>
    )
}

export default Cart