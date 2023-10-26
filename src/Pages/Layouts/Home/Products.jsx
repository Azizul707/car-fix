import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {

    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        fetch( '/products.json' )
            .then( res => res.json() )
            .then( data => {
                
                setProducts( data )
            } )
        
    }, [] )
    
    return (

        <div className="mt-20">
            <div className="space-y-3">
                    <h2 className="text-center text-2xl font-bold text-orange-600">Our Popular Products</h2>
                    <h2 className="text-center text-4xl font-bold"> Brows our Products</h2>
                    <p className="text-center">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which do not look even slightly believable. </p>
                </div>
            <div className=" my-20 grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products?.map((product,idx)=><ProductCard key={idx} product={product}></ProductCard>)
            }
        </div>
        </div>
        
        
    );
};

export default Products;



