import "./Footer.css"

function Foot() {
    return (
        <div className="container-flud ">
            <div id="foot1" className="row-12 ">
                <h4>NEED HELP ?</h4>
                <h1>We are here to help</h1>
                <p>Our team are here to make your shopping stress free.</p>
                <button>Click here</button>
            </div>
            <div id="foot2" className="row-12 ">
                <div className="row">
                    <div id="sec1" className="col-4 sec">
                        <h3>Contact</h3>
                        <a href="">+1 510-513-9937</a>
                        <a href="">minhajuddinshaik4@gmail.com</a>
                    </div>
                    <div id="sec2" className="col-2 sec">
                        <h3>Shop</h3>
                        <a href="">tops</a>
                        <a href="">Bottoms</a>
                        <a href="">New in</a>
                        <a href="">Outerwear</a>
                        <a href="">About us</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                    <div id="sec3" className="col-2 sec">
                        <h3>Company</h3>
                        <a href="">Cookies</a>
                        <a href="">Payments</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy</a>
                        <a href="">Security</a>
                    </div>
                    <div id="sec4" className="col-4  sec">
                        <h3>Newsletter</h3>
                        <p style={{ width: "300px" }}>Be the first to read our latest offer </p>
                        <input className="form-control" type="email" placeholder="YOUR EMAIL ADDRESS" />
                    </div>
                </div>
                {/* <div id="logo1">
                    <a href=""><i class="bi bi-instagram " style={{ color: 'white' }} ></i></a>
                </div>
                <div id="logo2">
                    <a href=""><i class="bi bi-facebook " style={{ color: 'white' }}></i></a>
                </div>
                <div id="logo3">
                    <a href=""><i class="bi bi-twitter" style={{ color: 'white' }}></i></a>
                </div> */}
            </div>
        </div>
    )
}

export default Foot;