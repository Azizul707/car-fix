import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServicesDetails = () => {
    const { id } = useParams();
    const [ service, setService ] = useState( [] );
    console.log(service);
    useEffect( () => {
        fetch( `http://localhost:5000/services/${id}` )
            .then( res => res.json() )
            .then( data => {
                setService( data )    
        })
    },[])

    return (
        <div>
            details
        </div>
    );
};

export default ServicesDetails;