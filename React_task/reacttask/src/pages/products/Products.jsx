import { Link } from "react-router-dom";
import "./Products.css"
import { filterProducts, getProducts, addToCart } from "./products.js";
import { useEffect, useState, useRef } from "react";
import BgWallpaper from "../bgwallpaper/BgWallpaper.jsx";
import ReduxStore from "../../components/redux/store/ReduxStore.js";
import CartActionCreator from "../../components/redux/action-creator/CartActionCreator.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Products() {

    const dispatch = useDispatch()

    const bring = useSelector((get) => {
        return get
    })

    const cartRef = useRef(null)
    function cart() {
        const cartObj = CartActionCreator(cartRef.current.value)
        ReduxStore.dispatch(cartObj)
    }

    const [state, setState] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState("https://img.freepik.com/premium-photo/high-angle-view-digital-camera-table_1048944-10417508.jpg?semt=ais_hybrid&w=740&q=80")
    const anchorA = useRef()
    const anchorE = useRef()
    const anchorJ = useRef()
    const anchorM = useRef()
    const anchorW = useRef()
    useEffect(function () {
        getProducts(setState)
    }, [])
    return (
        <div>
            <section className="products-ad">
                <BgWallpaper />
            </section>
            <section className="products-category">
                <div className="container">
                    <div className="row">
                        <div className="col-2  category">
                            <img style={{ borderRadius: "0px", border: "2px solid white" }} src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbGV8ZW58MHx8MHx8fDA%3D" alt="" width={"100%"} />
                        </div>
                        <div className="col-2 category">
                            <img onMouseOver={() => {
                                anchorA.current.style.color = "brown"
                            }} onMouseOut={() => {
                                anchorA.current.style.color = "black"
                            }}
                                onClick={function () {
                                    filterProducts(null, setState)
                                    setSelectedCategory("all")
                                    setSelectedImage
                                }}
                                src="https://img.freepik.com/premium-photo/high-angle-view-digital-camera-table_1048944-10417508.jpg?semt=ais_hybrid&w=740&q=80" alt="" width={75} height={75} />
                            <a ref={anchorA} href="" className={selectedCategory === "all" ? "active" : ""}>All</a>
                        </div>
                        <div className="col-2 category">
                            <img onMouseOver={() => {
                                anchorE.current.style.color = "brown"
                            }} onMouseOut={() => {
                                anchorE.current.style.color = "black"
                            }}
                                onClick={function () {
                                    filterProducts("electronics", setState)
                                }}
                                src="https://www.shutterstock.com/image-illustration/group-home-appliances-consumer-electronics-600nw-2451385301.jpg" alt="" width={75} height={75} />
                            <a ref={anchorE} href="">Electronics</a>
                        </div>
                        <div className="col-2 category">
                            <img onMouseOver={() => {
                                anchorJ.current.style.color = "brown"
                            }} onMouseOut={() => {
                                anchorJ.current.style.color = "black"
                            }} onClick={function () {
                                filterProducts("jewelery", setState)
                            }}
                                src="https://img.freepik.com/premium-photo/beautiful-collection-jewelry-luxury-store_986484-95.jpg" alt="" width={75} height={75} />
                            <a ref={anchorJ} href="">Jewellery</a>
                        </div>
                        <div className="col-2 category">
                            <img onMouseOver={() => {
                                anchorM.current.style.color = "brown"
                            }} onMouseOut={() => {
                                anchorM.current.style.color = "black"
                            }} onClick={function () {
                                filterProducts("men's clothing", setState)
                            }}
                                src="https://s3-media0.fl.yelpcdn.com/bphoto/-LtEE_ezSRAtXo0mHrQDKA/1000s.jpg" alt="" width={75} height={75} />
                            <a ref={anchorM} href="">Men's wear</a>
                        </div>
                        <div className="col-2 category">
                            <img onMouseOver={() => {
                                anchorW.current.style.color = "brown"
                            }} onMouseOut={() => {
                                anchorW.current.style.color = "black"
                            }} onClick={function () {
                                filterProducts("women's clothing", setState)
                            }}
                                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" width={75} height={75} />
                            <a ref={anchorW} href="">Women's wear</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products-data">
                {
                    state.map(function (product) {
                        return (
                            <div className="card">
                                <img ref={cartRef} style={{ borderRadius: "0" }} src={product.image} alt="" width={"100%"} height={170} />
                                <h2>{product.title}</h2>
                                <h3>${product.price}</h3>
                                <div className="bt">
                                    <Link to={`/ProductsDetail/${product.id}`}>
                                        <button>Product details</button>
                                    </Link>
                                    <button onClick={() => {
                                        addToCart(product, dispatch)
                                    }}>Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Products;