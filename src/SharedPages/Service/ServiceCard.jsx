/* eslint-disable react/prop-types */
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";

const ServiceCard = ( { service } ) => {
    const id = service._id;
    return (
        <div className='mt-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={service?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ service?.title }</h2>
                    <p className='font-bold text-orange-600'>Price:${ service?.price }</p>
                    <div className="card-actions justify-end">
                        <Link to={`/servicesDetails/${id}`}>
                        <button className="btn"><BsFillArrowRightCircleFill className="text-orange-600 text-2xl"></BsFillArrowRightCircleFill></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;