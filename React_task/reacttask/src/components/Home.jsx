import "./Home.css"

function Home() {
    return (
        <div className="home-container">
            <div className="motion">
                <video width={"100%"} muted loop autoPlay>
                    <source src="https://www.pexels.com/download/video/3283572/" />
                </video>
            </div>
            <div className="content">
                <h1>Welcome inn!!!</h1>
                <p>Welcome to (Company Name)! We're glad you're here. Learn more about our services, values, and how we can help you achieve your goals.'' ``Welcome to (Forum Name)! Join our vibrant community of like-minded individuals. Share your thoughts, ask questions, and connect with others!'' ``Welcome to (Agency Name)! </p>
                <button>Explore more!</button>
            </div>
        </div >
    )
}

export default Home;