import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Pages/Layouts/MainLayouts";
import Home from "../Pages/Layouts/Home/Home";
import SingUP from "../Pages/SingUp/SingUP";
import Login from "../Pages/Layouts/Login/Login";

const CreateRouter = createBrowserRouter( [ {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/singup',
            element:<SingUP/>
        },
        {
            path: '/login',
            element:<Login/>
        }
    ]
    

}])

export default CreateRouter;