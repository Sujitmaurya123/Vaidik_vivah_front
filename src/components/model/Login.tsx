import React from 'react';
import { Link } from 'react-router-dom';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
            <div className="bg-[#a44949]  p-6 rounded-lg w-full max-w-md relative sm:rounded-2xl  sm:p-8  overflow-y-auto max-h-[90vh]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-3xl cursor-pointer hover:text-black"
                >
                    &times;
                </button>

                {/* Logo */}
                {/* <div className="flex justify-center mb-4">
                    <Link to={"/"} className='mx-auto mb-2 fixed top-10'>
                        <img src="/logotest3.png" alt="Logo" className="w-72 h-24 " />
                    </Link>
                </div> */}

                {/* Heading */}
                <h2 className="text-2xl font-[Bembo-MT-Pro-Bold] text-center mb-4 ">Login</h2>
                <p className=" text-center mb-6 font-[Bembo-MT-Pro-Regular]">
                    Please fill in your Email and Password to Sign In.
                </p>

                {/* Form */}
                <form>
                    <div className="mb-4 font-[Bembo-MT-Pro-Regular]">
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full px-4 py-2 border rounded-lg  outline-none "
                        />
                    </div>

                    <div className="mb-4 font-[Bembo-MT-Pro-Regular]">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            placeholder="Password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg  outline-none"
                        />
                    </div>

                    

                    <button
                        type="submit"
                        className="w-full bg-[#9e2727] cursor-pointer text-white py-2 text-lg rounded-lg hover:bg-[#9e2727] transition font-[Bembo-MT-Pro-Regular]"
                    >
                        Sign in
                    </button>
                </form>
                {/* Footer Text */}
                <div className=" text-sm space-y-1 font-[Bembo-MT-Pro-Regular]">
                    <div className="flex justify-between items-center mb-4 mt-2">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" className="mr-2" />
                            <label htmlFor="rememberMe" className="text-white">
                                Remember me
                            </label>
                        </div>

                        <Link
                            to="/forgot-password"
                            className="text-white underline"
                        >
                            Forgot your login details?
                        </Link>
                    </div>

                    <div className="flex items-center justify-center my-4">
                        <hr className="flex-grow border-gray-400" />
                        <span className="mx-4 text-[white]">Or</span>
                        <hr className="flex-grow border-gray-400" />
                    </div>
                    <div className="flex xl:items-center xl:justify-center ">
                        <p>
                            New User ?{" "}
                            <Link to="/questions" className="text-[white] underline ">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default LoginModal;
