import { useLocation } from "react-router-dom"
import { data } from "../data/RandomData"
import { useState, useEffect } from "react"

function Profile() {
    // const { id } = useParams
    const location = useLocation()
    const [profile, setProfile] = useState()

    console.log(location.pathname.split("/")[3]);

    const getUserData = () => {
        const locationId = location.pathname.split("/")[3];
        const dataId = data[locationId].id - 1;

        if (dataId == locationId) {
            setProfile(data[2])
            console.log(profile);
        }

    }

    useEffect(() => {
        getUserData()
    }, [])


    return (
        <div>
            <h1>Profile</h1>
            <h2>{profile}</h2>
            <h3>{profile.name}</h3>
            {/* {
                profile.map((pro, i) => (
                    <div key={i}>
                        <p>{pro.id}</p>
                        <p>{pro.name}</p>
                    </div>
                ))
            } */}
            <p>Current path is {location.pathname}</p>
            <h2></h2>
        </div>
    )
}

export default Profile