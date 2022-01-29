import { useState, useEffect} from "react"

function Geolocation(){

    const [location, setLocation] = useState({
        lat : "",
        long : ""
    })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(onSucess, onError)
    })

    function onSucess(position){
        setLocation({
            lat : position.coords.latitude,
            long : position.coords.longitude
        })
    }

    function onError(){
        window.alert("Geolocation not available, turn on location")
    }

    return location
}

export default Geolocation;