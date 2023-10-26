import { Link } from "react-router-dom";
import singImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const SingUP = () => {
    const {createUser} = useContext( AuthContext );
    const handleSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log( name, email, password );
        
        createUser( email, password )
            .then( result => {
            console.log(result.user);
            } )
            .catch( error => {
            console.log(error.message)
            } )
        
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="">
                        <img src={ singImg } alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="p-2 md:p-10 text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sing UP!</h1>

                        </div>
                        <form onSubmit={handleSingUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email"   className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600">Sing Up</button>
                            </div>
                        </form>
                        <div className="p-2 md:p-10">
                            <h4>Already have an account? <Link className="text-orange-600 font-semibold" to='/login'>Login</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUP;