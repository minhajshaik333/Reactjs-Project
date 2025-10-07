import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="con1">
                <h1 style={{ color: "black", fontSize: "79px" }}>Contact Me</h1>
            </div>
            <div className="con3">
                <h2 style={{ color: "blue", fontSize: "59px" }}>minhajshaik4u@gmail.com</h2>
            </div>
            <div className="con2">
                <p style={{ color: "black" }}>Fell free to contact me with any queries and questions</p>
            </div>
            <div className="con4">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div className="con5">
                <p style={{ color: "blue", width: "200px", marginLeft: "375px" }}>Write a message</p>
                <textarea style={{ borderBottom: "2px solid blue" }} rows={7} cols={102} name="Message" id=""></textarea>
            </div>
            <div className="con6">
                <button className="contactb">Submit</button>
            </div>
            <div className="con7">
                <i style={{ padding: "0px 17px 0px" }} class="bi bi-facebook"></i>
                <i style={{ padding: "0px 17px 0px" }} class="bi bi-twitter-x"></i>
                <i style={{ padding: "0px 17px 0px" }} class="bi bi-instagram"></i>
            </div>
        </div>
    )
}

export default Contact;