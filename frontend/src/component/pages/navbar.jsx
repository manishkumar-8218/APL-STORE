import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" w-screen flex  flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-16 shadow-lg shadow-cyan-500/50 bg-fixed">
            <div className=" w-1/3  flex items-center  justify-center">
                <div>
                    <Link className="text-xl text-black justify-center place-items-center font-extrabold hover:text-2xl hover:text-orange-400 transition ease-in-out " to="/">Home</Link>
                </div>
            </div>
            <div className="w-2/3 flex justify-end  items-center">
                <div className=" mx-8">
                    <Link className="text-xl text-black font-semibold hover:text-red-700" to="/about">About</Link>
                </div>
                <div className=" mx-8">
                    <Link className="text-xl text-black font-semibold hover:text-red-700" to="/login">Login</Link>
                </div>
                <div className=" mr-16">
                    <Link className="text-xl text-black font-semibold hover:text-red-700" to="/signup">Signup</Link>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
