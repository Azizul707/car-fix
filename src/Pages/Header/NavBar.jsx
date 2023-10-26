import { Link, NavLink } from "react-router-dom";
import { BsFillBagFill, BsSearch } from "react-icons/bs";
import logo from "../../../public/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import {BsFillPersonCheckFill,BsFillPersonXFill} from'react-icons/bs'




const NavBar = () => {

    const { user, singOut } = useContext( AuthContext );

    const handleSingOut = () => {
        singOut()
            .then( result => {
                alert( 'logout' );
            } )
            .catch( error => {
                console.log( error.message );
            } )
    }

    return (
        <div className="">
            <nav className="md:flex items-center justify-around border-b">
                <div className=""><img src={ logo } alt="" /></div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink>Home</NavLink>
                    </li>
                    <li>
                        <NavLink>About</NavLink>
                    </li>
                    <li>
                        <NavLink>Service</NavLink>
                    </li>
                    <li>
                        <NavLink>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink>Contact</NavLink>
                    </li>

                </ul>
                <div className="flex items-center gap-5">
                    <span><BsFillBagFill /></span>
                    <span><BsSearch /></span>
                    <span><button className="py-1 px-2 border-2 border-orange-600 text-orange-600 rounded">Appointment</button></span>
                    {
                        user ? <button onClick={ handleSingOut } className="text-green-500 text-3xl"><span><BsFillPersonCheckFill></BsFillPersonCheckFill> </span></button> :
                            <Link className="text-red-500  gap-2" to='/login'><span className="text-3xl "><BsFillPersonXFill></BsFillPersonXFill></span></Link>
                    }
                </div>
            </nav>

        </div>
    );
};

export default NavBar;