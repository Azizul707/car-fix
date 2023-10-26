import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="max-w-lg rounded-md shadow-2xl w-1/2 relative">
                <img src={ person }  />
                <img src={ parts } className="max-w-sm absolute -bottom-10 -right-6 rounded-lg shadow-2xl w-1/2 border-8 border-white" />
                </div>

                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-orange-600">About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn bg-orange-600 text-white hover:text-black">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;