import { useState } from "react"

function Card() {
    var [image, setImage] = useState("https://dam.mediacorp.sg/image/upload/s--fhnxnpfg--/c_fill,g_auto,h_622,w_830/f_auto,q_auto/tissot-2-seastar-2000-professional-hero.jpg?itok=-_YG8RAJ")
    var [title, setTitle] = useState("limited-edition WATCH")
    var [price, setPrice] = useState("$700")
    var [text, setText] = useState("watch is a timepiece that is produced in a restricted quantity, usually with a predefined number of units. This could be as few as 10 or as many as several thousand, depending on the brand and the specific model. Limited editions are often created to commemorate a special event, collaboration, or achievement.")
    function updateData() {
        setImage("https://i.guim.co.uk/img/media/8ab9e17c1bcfc51b15fc9c8875d3ec93e030788a/301_0_5840_4672/500.jpg?quality=85&auto=format&fit=max&s=e92ef9cef4c70f1130305f05d4b0d009")
        setTitle("Samsung Z Fold 7")
        setPrice("$1999")
        setText("The Galaxy Z Fold7 Is The Ultimate Phone That Unfolds For More. Can Your Phone Do That? Create With Ease Wherever You Please On The Expansive Inner Screen Of The Galaxy Z Fold7. Photo Assist. Flex Zoom. Note Assist. Exclusive Colors")
    }

    return (
        <div style={{ width: "450px", boxShadow: "0 0 13px black", textAlign: "center", margin: "120px auto" }}>
            <img src={image} alt="" width={450} height={300} />
            <div style={{ padding: "20px" }} >
                <h2 >{title}</h2>
                <h3 >{price}</h3>
                <p>{text}</p>
                <button onClick={updateData}>Change Product</button>
            </div>
        </div>
    )

}

export default Card;