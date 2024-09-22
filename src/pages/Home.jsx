import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Welcome to the home page</h1>
            <button onClick={() => navigate('/about')}>Go to about page</button>
            <button onClick={() => navigate('/dashboard')}>Go to dashboard page</button>
        </div>
    )
}

export default Home