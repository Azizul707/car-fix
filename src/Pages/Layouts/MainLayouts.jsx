import { Outlet } from "react-router-dom";
import Footer from "./Home/Footer/Footer";
import NavBar from "../Header/NavBar";

const MainLayouts = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <NavBar></NavBar>
            <div className=""><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;