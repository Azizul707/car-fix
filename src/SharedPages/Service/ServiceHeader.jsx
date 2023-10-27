import image from  "../../assets/images/checkout/checkout.png"
const ServiceHeader = () => {
    return (
        <div>
            <div className="">
             
                <div className="max-w-screen-xl border mx-auto relative">
                <img className="w-full" src={image} alt="" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-[#151515] to-[#15151500]"> 
                        <div className="header-btn p-2 w-40 absolute bottom-0 left-[44%] text-white
                        ">
                            <div className="absolute top-6 bottom-0 left-0 right-0">Home/Service Details</div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHeader;