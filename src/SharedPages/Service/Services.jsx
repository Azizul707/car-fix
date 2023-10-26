import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [ services, setServices ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:5000/services',)
            .then( res => res.json() )
            .then( data => {
                setServices( data )
            } )
    }, [] )

    return (
        <div className="my-10">
            <div className="">
                <div className="space-y-3">
                    <h2 className="text-center text-2xl font-bold text-orange-600">Services</h2>
                    <h2 className="text-center text-4xl font-bold"> Our Services Area</h2>
                    <p className="text-center">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which do not look even slightly believable. </p>
                </div>
                <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services?.map( service => <ServiceCard key={ service._id } service={ service }></ServiceCard> )
                    }
                </div>

                <div className="my-20 flex justify-center">
                    <span className=""><button className="  border text-orange-600 font-semibold py-2 px-3 rounded border-orange-600" >More Services</button></span>
                </div>
            </div>


        </div>
    );
};

export default Services;