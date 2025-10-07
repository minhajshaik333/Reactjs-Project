import "./BgWallpaper.css"
import { useEffect, useState, useRef } from "react"

function BgWallpaper() {

    const ref = useRef()
    const [state, setState] = useState("bgWallpaper1")
    const [head, setHead] = useState("Electronics")
    const [describe, setDescribe] = useState("Bring your vision to life. Don't just see the picture—experience it. With stunning 4K clarity and a vibrant color spectrum, every image and video becomes an unforgettable visual feast. Perfect for creatives and movie lovers alike.")
    useEffect(() => {
        ref.current = setInterval(() => {
            setState(() => {
                if (state == "bgWallpaper1") return "bgWallpaper2"
                if (state == "bgWallpaper2") return "bgWallpaper3"
                if (state == "bgWallpaper3") return "bgWallpaper4"
                if (state == "bgWallpaper4") return "bgWallpaper1"
            })
            setHead(() => {
                if (head == "Electronics") return "Jewellery"
                if (head == "Jewellery") return "Men's wear"
                if (head == "Men's wear") return "Women's wear"
                if (head == "Women's wear") return "Electronics"
            })
            setDescribe(() => {
                if (describe == "Bring your vision to life. Don't just see the picture—experience it. With stunning 4K clarity and a vibrant color spectrum, every image and video becomes an unforgettable visual feast. Perfect for creatives and movie lovers alike.")
                    return "“Jewelry speaks when words fail.” “Adorn yourself with moments.” “Embrace the beauty of imperfection.” “A little sparkle goes a long way.”"
                if (describe == "“Jewelry speaks when words fail.” “Adorn yourself with moments.” “Embrace the beauty of imperfection.” “A little sparkle goes a long way.”")
                    return "For versatile chinos: The ultimate smart-casual staple. These versatile chinos transition seamlessly from the office to the weekend. With a comfortable fit and a refined look, they are your new secret weapon for effortless style."
                if (describe == "For versatile chinos: The ultimate smart-casual staple. These versatile chinos transition seamlessly from the office to the weekend. With a comfortable fit and a refined look, they are your new secret weapon for effortless style.")
                    return "Crafted from luxurious fabric that drapes beautifully, this dress is the epitome of timeless elegance. A subtle, yet stunning statement for your next special event"
                if (describe == "Crafted from luxurious fabric that drapes beautifully, this dress is the epitome of timeless elegance. A subtle, yet stunning statement for your next special event")
                    return "Bring your vision to life. Don't just see the picture—experience it. With stunning 4K clarity and a vibrant color spectrum, every image and video becomes an unforgettable visual feast. Perfect for creatives and movie lovers alike."
            })
        }, 3000)
        return () => {
            clearInterval(ref.current) // cleanup on unmounted
        }
    }, [state])

    return (
        <div className={`bgContainer ${state}`}>
            <div className="ad-display">
                <h1>{head}</h1>
                <p>{describe}</p>
            </div>
        </div>
    )
}

export default BgWallpaper