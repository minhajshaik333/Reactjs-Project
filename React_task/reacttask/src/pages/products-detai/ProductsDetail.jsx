import "./ProductsDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function ProductsDetail() {
    const { id } = useParams()
    const [state, setstate] = useState({
        image: "",
        title: "",
        price: "",
        rating: {
            rate: ""
        },
        category: "",
        description: ""
    })
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            console.log(res)
            setstate(res.data)
        }).catch((error) => {
            alert("Something went wrong")
            console.log(error)
        })
    }, [])
    return (
        <div className="products-detail">
            <section className="section-1">
                <img src={state.image} alt="" width={"100%"} height={"100%"} />
            </section>
            <section className="section-2">
                <div className="twocolumns">
                    <div>
                        <dl>
                            <dt>Product name</dt>
                            <dd>{state.title}</dd>
                        </dl>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>Product price</dt>
                                <dd>${state.price}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="twocolumns">
                    <div>
                        <div>
                            <dl>
                                <dt>Category</dt>
                                <dd>{state.category}</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div>
                            <dl>
                                <dt>Product rating</dt>
                                <dd>{state.rating.rate}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "19px" }}>
                    <dl style={{ padding: "30px 12px 10px 25px " }}>
                        <dt>Description</dt>
                        <dd>{state.description}</dd>
                    </dl>
                </div>
                <div className="lastRow">
                    <button id="go">Go back</button>
                    <button id="add">add to cart</button>

                </div>
            </section>
        </div>
    )
}

export default ProductsDetail