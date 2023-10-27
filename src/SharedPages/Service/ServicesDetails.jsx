import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceHeader from "./ServiceHeader";
import { BsArrowRight, BsDownload } from "react-icons/bs"
import DetailsPageCard from "./DetailsPageCard";


const ServicesDetails = () => {
    const { id } = useParams();
    const [ service, setService ] = useState( [] );
    console.log( service );
    const { img, title, description, price } = service;
    useEffect( () => {
        fetch( `http://localhost:5000/services/${ id }` )
            .then( res => res.json() )
            .then( data => {
                setService( data )
            } )
    }, [ id ] )

    return (
        <div className="max-w-screen-2xl mx-auto">
            <section className="">
                <ServiceHeader />
            </section>
            <section className="mt-28">
                <div className="grid md:grid-cols-4 gap-5">
                    <div className="space-y-5 col-span-3">
                        <div className=""><img className="w-full rounded max-h-[400px]" src={ img } alt="" /></div>
                        <h3 className="text-3xl font-bold">{ title }</h3>
                        <p className="text-sm text-gray-500 text-justify">{ description }</p>
                        <div className="">
                            <DetailsPageCard />
                        </div>
                    </div>

                    {/* right side */ }
                    <div className=" ">
                        <div className="bg-[#F3F3F3] py-4 px-8 h-fit space-y-2 rounded-lg">
                            <h1 className="text-2xl font-bold">Services</h1>
                            <button className="bg-[#FFF] py-2 px-5 w-full flex justify-between items-center hover:bg-orange-600 rounded hover:text-white">Full Car Repair  <span className=""><BsArrowRight></BsArrowRight></span></button>
                            <button className="bg-[#FFF] py-2 px-5 w-full flex justify-between items-center hover:bg-orange-600 rounded hover:text-white">Engine Repair  <span className=""><BsArrowRight></BsArrowRight></span></button>
                            <button className="bg-[#FFF] py-2 px-5 w-full flex justify-between items-center hover:bg-orange-600 rounded hover:text-white">Automatic Services  <span className=""><BsArrowRight></BsArrowRight></span></button>
                            <button className="bg-[#FFF] py-2 px-5 w-full flex justify-between items-center hover:bg-orange-600 rounded hover:text-white">Engine Oil Change  <span className=""><BsArrowRight></BsArrowRight></span></button>
                            <button className="bg-[#FFF] py-2 px-5 w-full flex justify-between items-center hover:bg-orange-600 rounded hover:text-white ">Battery Charge  <span className=""><BsArrowRight></BsArrowRight></span></button>
                        </div>
                        <div className="">
                            <div className="bg-black py-4 px w-full mt-7 text-white rounded-lg">
                                <div className="">
                                    <h1 className="text-2xl p-5 font-bold">Download</h1>
                                    <button className=" py-2 px-5 w-full flex justify-around items-center">
                                        <span><BsDownload /></span>
                                        <span>Our Brochure</span>
                                        <span className="bg-orange-600 p-3"><BsArrowRight></BsArrowRight></span></button>
                                </div>
                                <div className="">
                                    <button className=" py-2 px-5 w-full flex justify-around items-center">
                                        <span><BsDownload /></span>
                                        <span>Our Brochure</span>
                                        <span className="bg-orange-600 p-3"><BsArrowRight></BsArrowRight></span></button>
                                </div>
                            </div>
                            <div className="bg-black w-full text-white rounded-lg mt-7 p-4">
                                <div className="space-y-5">
                                    <h1 className="text-2xl font-bold text-center">Car Doctor</h1>
                                    <p className="text-xl font-semibold text-center">Need Help? We Are Here <br />
                                        To Help You</p>
                                    <div className="bg-white w-11/12 mx-auto rounded-lg  p-2 space-y-1">
                                        <p className="text-exl text-black font-semibold text-center"><span className="text-orange-600">Car Doctor</span> Special</p>
                                        <p className="text-black text-center">Save up to <span className="text-orange-600 font-semibold">60% off</span></p>
                                        <button className="p-3 w-full bg-orange-600 rounded">Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7">
                            <p className="text-3xl font-bold">Price ${ price }</p>
                        </div>
                        <div className="mt-7">
                            <button className="bg-orange-600 rounded text-white font-bold py-3 w-full ">Procced Checkout</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ServicesDetails;