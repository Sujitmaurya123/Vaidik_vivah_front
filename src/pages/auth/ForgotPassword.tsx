import { Link } from "react-router-dom"
import Input from "../../components/input/Input"


const ForgotPassword = () => {
    return (
        <div className={`min-w-screen h-screen flex flex-col items-center justify-center  bg-[#007EAF]`}>
            <div className="flex items-center justify-center mb-2 md:mb-10">
                <Link to="/">
                    <img src="/logowhite.png" alt="" className='w-72 h-24 top-10' />
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <div className="bg-white flex items-center justify-center rounded-full w-12 h-12">
                    <div className="bg-[#D1FADF] rounded-full w-9 h-9 flex items-center justify-center">
                        <img src="/confirm.png" alt="Star" className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-white mt-2">
                    <h1 className="text-3xl font-bold">Create Your Password</h1>
                    <p className="mt-4 md:text-lg text-center">
                        Choose a strong password that is long, random, and unique. <br className="hidden md:inline" />
                        It's best to avoid using common words and personal information.
                    </p>
                </div>
            </div>
            <div className="w-full max-w-md px-2 py-4 mt-4">
                <form >
                    <div className="mb-4 relative">
                        <Input
                            label="Enter new password"
                            placeholder="Password"
                            type={"password"}

                            className={`w-full rounded-md border-2 p-2 pr-10 `}
                        />


                    </div>

                    <div className="mb-4 relative">
                        <Input
                            label="Re-enter password"
                            placeholder="Re-enter Password"
                            type={"password"}

                            className={`w-full rounded-md border-2 p-2 pr-10 `}
                        />

                    </div>

                    <button type="submit" className={`bg-white text-[#007EAF] w-full h-10 rounded-md mt-4`}>

                        Create Password

                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword