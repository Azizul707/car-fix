import { Outlet } from "react-router-dom";
import Footer from "./Home/Footer/Footer";
import NavBar from "../Header/NavBar";

const MainLayouts = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;