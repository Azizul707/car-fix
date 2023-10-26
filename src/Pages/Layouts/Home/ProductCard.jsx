/* eslint-disable react/prop-types */



const ProductCard = ( { product } ) => {

    return (
        <div>
            <div className="card card-compact w-96  bg-base-100 shadow-xl">
                <figure><img className="h-96" src={ product?.image_url } alt="Shoes" /></figure>
                <div className="card-body mx-auto text-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly/>
                    </div>
                    <h2 className="card-title">{ product?.product_name }</h2>
                    <p className='font-bold text-orange-600'>Price:${ product?.price }</p>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;