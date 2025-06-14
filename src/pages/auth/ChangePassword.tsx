import { Link } from "react-router-dom"
import Input from "../../components/input/Input"


const ChangePassword = () => {
    return (
        <div className={`min-w-screen bg-[#9e2727]  h-screen flex flex-col items-center justify-center `}>
            <Link to="/" className="fixed top-10">
                <img src="/logotest3.png" alt="logo" className="w-72 h-24" />
            </Link>

            <div className="flex flex-col items-center justify-center mt-20">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    <div className="bg-[#D1FADF] rounded-full w-9 h-9 flex items-center justify-center">
                        <img src="/confirm.png" alt="confirm" className="w-6 h-6" />
                    </div>
                </div>
                <div className="text-white mt-4 text-center">
                    <h1 className="text-3xl font-[Bembo-MT-Pro-Bold]">Change your password</h1>
                    <p className="mt-4 md:text-lg font-[Bembo-MT-Pro-Light]">
                        Please choose a strong password that is long, random, and unique.
                        <br />
                        Strong passwords include numbers, letters, and punctuation marks.
                        <br />
                        Avoid using common words and personal information.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-md px-4 py-4 mt-4 font-[Bembo-MT-Pro-Bold]">
                <form >
                    <div className="mb-4 relative">
                        <Input
                            label="Enter new password"
                            placeholder="Password"
                            type= "password"
                           
                            className={`w-full rounded-md border-2 p-2 `}
                        />
                        
                        
                    </div>

                    <div className="mb-4 relative">
                        <Input
                            label="Re-enter password"
                            placeholder="Re-enter password"
                            type= "password"
                          
                            className={`w-full rounded-md border-2 p-2 `}
                        />

                    </div>

                    <button
                        type="submit"
                        className={`bg-white text-red-600 w-full h-10 rounded-md mt-4 font-[Bembo-MT-Pro-Bold]`}
                    >
                       
                            Change Password
                        
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword