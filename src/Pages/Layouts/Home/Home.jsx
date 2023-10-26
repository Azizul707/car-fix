import { useContext } from "react";
import About from "../../../SharedPages/About/About";
import Services from "../../../SharedPages/Service/Services";
import SliderBanner from "../../../SharedPages/Slider/SliderBanner";
import ContactInfo from "./ContactInfo";
import Products from "./Products";
import { AuthContext } from "../../../AuthProvider";

const Home = () => {
   

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white">
            <SliderBanner />
            <About />
            <Services />
            <ContactInfo />
            <Products/>
            
            
        </div>
        
    );
};

export default Home;