import { Link } from "react-router-dom"
import Input from "../../components/input/Input"


const ForgotPassword = () => {
    return (
        <div className={`min-w-screen min-h-screen flex flex-col items-center bg-[#9e2727] `}>
            <div className="flex items-center justify-center mb-14 w-[268px] h-[90px]">
                <Link to={"/"} className='fixed top-8'>
                    <img src="/logotest3.png" alt="Logo" className='w-72 h-24 ' />
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center  mt-8 mb-4">
                <div className="bg-white flex items-center justify-center rounded-full w-12 h-12">
                    <div className="bg-[#D1FADF] rounded-full w-9 h-9 flex items-center justify-center ">
                        <img src="/confirm.png" alt="Star" className="w-6 h-6" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center text-white mt-4">
                    <h1 className="text-4xl  font-[Bembo-MT-Pro-Bold]">Forgot password</h1>
                    <p className="mt-4  text-md font-[Bembo-MT-Pro-Light]">
                        You will receive OTP verification code via email for resetting your password
                    </p>
                </div>
            </div>

            <div className="w-full max-w-md px-2  py-4 font-[Bembo-MT-Pro-Bold]">
                <form action="" className="space-y-6 rounded-[8px]" >

                    <Input
                        label="Email"
                        type="email"
                       
                        placeholder="Enter your email"
                    />
                    

                    <button
                        type="submit"
                        className={`w-full py-2 px-4 text-red-600 rounded bg-[#ffffff]`}
                        

                    >
                      Send Email
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword