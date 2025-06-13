import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen font-sans">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 relative">
                <img
                    src="/weddingimg3.jpeg" // replace with actual image path
                    alt="Wedding Couple"
                    className="h-[100vh] w-full object-cover"
                />
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center p-6">
                    <div className="text-center text-white space-y-3">
                        <h2 className="text-xl md:text-2xl font-semibold">
                            Indian Matrimony/Dating
                            
                        </h2>
                        <p className="text-sm md:text-base">
                            Matrimonial/Dating website for Indian Community
                            
                        </p>
                    </div>
                </div>
                <div className="absolute top-4 left-4">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src="/logotest3.png"
                            alt="logo"
                            className="h-24 w-auto md:h-24"
                        />
                    </Link>
                </div>
            </div>

            {/* Right Login Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">
                <div className="w-full max-w-md space-y-6">
                    

                    <h2 className="text-xl text-[#9e2727] font-semibold text-center">
                        Enter your email and <br /> password to log in.
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Email Address"
                            className="w-full border border-[#9e2727] rounded px-4 py-2 focus:outline-none"
                        />
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border border-[#9e2727] rounded px-4 py-2 pr-10 focus:outline-none"
                            />
                            <span className="absolute inset-y-0 right-3 flex items-center text-gray-600 cursor-pointer">
                                👁️
                            </span>
                        </div>

                        <div className="bg-red-100 text-[#9e2727] text-sm p-3 rounded">
                            You need to sign in or sign up before continuing.
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#9e2727] cursor-pointer text-white font-semibold py-2 rounded-full"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="text-center text-sm space-y-1">
                        <div className="flex flex-col xl:flex-row items-center justify-between xl:justify-between  mb-4 mt-2 ">
                            <div className="flex items-center">
                                <input type="checkbox" id="rememberMe" className="mr-2" />
                                <label htmlFor="rememberMe" className="text-[#9e2727]">
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="/forgot-password"
                                className="text-[#9e2727] xl:mr-40 underline"
                            >
                                Forgot your login details?
                            </Link>
                        </div>
                        
                        <div className="flex items-center justify-center my-4">
                            <hr className="flex-grow border-gray-400" />
                            <span className="mx-4 text-[#9e2727]">Or</span>
                            <hr className="flex-grow border-gray-400" />
                        </div>
                        <div className="flex xl:items-left xl:justify-left ">
                            <p>
                                New User ?{" "}
                                <Link to="/questions" className="text-[#9e2727] ">
                                    Create an account
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
