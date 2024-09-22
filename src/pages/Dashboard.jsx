import { useNavigate, useLocation, useParams } from "react-router-dom"
// import { useState } from "react"
import { data } from "../data/RandomData"

function Dashboard() {
    const navigate = useNavigate()
    const location = useLocation()
    const { id } = useParams()

    // const handleNavigate = (id) => {
    //     console.log(id)
    // }

    return (
        <div>
            <h1>Dashboard</h1>
            {/* <h3>The userId is {user.id}</h3> */}
            {data.map((data, i) => (
                <div key={i}>
                    <h2>{data.name}</h2>
                    <button onClick={() => navigate(`/dashboard/profile/${data.id}`)}>Set your ID</button>
                    <p>Current path is {location.pathname}</p>
                    <p>Current id is {id}</p>
                </div>
            ))}
            <button onClick={() => navigate('/')}>Go to Home</button>

            <button onClick={() => navigate('/dashboard/profile')}>Go to Profile</button>
        </div>
    )
}

export default Dashboard