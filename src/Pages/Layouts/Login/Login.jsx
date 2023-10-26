import { Link } from "react-router-dom";
import login from "../../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider";
const Login = () => {
const { singIn } = useContext( AuthContext );

    const handleSingIn = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password );
        
        singIn( email, password )
            .then( result => {
                if ( result.user ) {
                    alert('successfully logged in')
                }
                
            } )
            .catch( error => {
                console.log( error.message )
                
            } )
        
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="">
                    <img src={login} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="p-2 md:p-10 text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <form onSubmit={handleSingIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600">Login</button>
                        </div>
                    </form>
                    <div className="p-2 md:p-10">
                        <h4>Do not have an account? <Link className="text-orange-600 font-semibold" to='/singup'>Sing UP</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;