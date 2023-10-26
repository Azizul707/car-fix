import imag1 from "../../assets/images/homeCarousel/1.jpg"
import imag2 from "../../assets/images/homeCarousel/2.jpg"
import imag3 from "../../assets/images/homeCarousel/3.jpg"
import imag4 from "../../assets/images/homeCarousel/4.jpg"

const SliderBanner = () => {
    return (
        <div>
            <div className="">
                <div className="carousel md:h-[800px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={ imag1 } className="w-full " />
                        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">
                            <div className="absolute bg-gradient-to-r from-[#151515] to-[ #15151500] text-white p-5 top-0 left-0 bottom-0 right-0 space-y-4">
                                <div className="space-y-5 md:mt-48">
                                    <h2 className="text-6xl font-bold leading-tight">Affordable <br />Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className="flex gap-4">
                                        <span><button className="bg-orange-600 py-2 px-3 rounded">Discover More</button></span>
                                        <span><button className="border py-2 px-3 rounded" >Latest Project</button></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle hover:bg-orange-600">❮</a>
                            <a href="#slide2" className="hover:bg-orange-600 btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={ imag2 } className="w-full" />
                        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">

                            <div className="absolute bg-gradient-to-r from-[#151515] to-[ #15151500] text-white p-5 top-0 left-0 bottom-0 right-0 space-y-4">
                                <div className="space-y-5 md:mt-48">
                                    <h2 className="text-6xl font-bold leading-tight">Affordable <br />Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className="flex gap-4">
                                        <span><button className="bg-orange-600 py-2 px-3 rounded">Discover More</button></span>
                                        <span><button className="border py-2 px-3 rounded" >Latest Project</button></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle hover:bg-orange-600">❮</a>
                            <a href="#slide3" className="btn btn-circle hover:bg-orange-600">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={ imag3 } className="w-full" />
                        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">

                            <div className="absolute bg-gradient-to-r from-[#151515] to-[ #15151500] text-white p-5 top-0 left-0 bottom-0 right-0 space-y-4">
                                <div className="space-y-5 md:mt-48">
                                    <h2 className="text-6xl font-bold leading-tight">Affordable <br />Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className="flex gap-4">
                                        <span><button className="bg-orange-600 py-2 px-3 rounded">Discover More</button></span>
                                        <span><button className="border py-2 px-3 rounded" >Latest Project</button></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle hover:bg-orange-600">❮</a>
                            <a href="#slide4" className="btn btn- hover:bg-orange-600">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={ imag4 } className="w-full" />
                        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-20 ">

                            <div className="absolute bg-gradient-to-r from-[#151515] to-[ #15151500] text-white p-5 top-0 left-0 bottom-0 right-0 space-y-4">
                                <div className="space-y-5 md:mt-48">
                                    <h2 className="text-6xl font-bold leading-tight">Affordable <br />Price For Car <br /> Servicing</h2>
                                    <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <div className="flex gap-4">
                                        <span><button className="bg-orange-600 py-2 px-3 rounded">Discover More</button></span>
                                        <span><button className="border py-2 px-3 rounded" >Latest Project</button></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle hover:bg-orange-600">❮</a>
                            <a href="#slide1" className="btn btn-circle hover:bg-orange-600">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SliderBanner;


