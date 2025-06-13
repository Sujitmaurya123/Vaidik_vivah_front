import { Link } from "react-router-dom"
import Input from "../../components/input/Input"


const Verification = () => {
  return (
      <div className={`min-w-screen min-h-screen flex flex-col items-center justify-center  bg-[#9e2727] `}>
          <div className="flex items-center justify-center mb-14">
              <Link to={"/"} className='fixed top-4'>
                  <img src="/logotest3.png" alt="" className='w-72 h-24 ' />
              </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 mb-2">
              <div className="bg-white flex items-center justify-center rounded-md w-12 h-12">
                  <img src="/lock.png" alt="Star" className='w-8 h-8' />
              </div>

              <div className="flex flex-col items-center justify-center text-white mt-4">
                  <h1 className="text-4xl font-bold">Verification code</h1>
                  <p className="mt-4 md:text-lg text-center">
                      Enter verification code which is sent to your email <br /> address
                      and  verify
                  </p>
              </div>

              <div className="flex items-center justify-center mt-8">
                  <form >
                      <div className="flex gap-4">
                          {[0, 1, 2, 3].map((index) => (
                              <div key={index}>
                                  <Input
                                      label=""

                                      className={`w-16 h-16 text-center rounded-xl text-3xl text-[#007EAF] placeholder-[#007EAF] outline-gray-400 border-red-500}`}
                                      type="text"
                                      inputMode="numeric"
                                      maxLength={1}
                                      placeholder="0"
                                     
                                  />
                                  
                              </div>
                          ))}
                      </div>

                      {/* <div className="flex items-center justify-center mt-8 text-[#F9F5FF] gap-1 text-lg">
            <p>Did you not receive code? </p>
            <button onClick={resendOtp}> Click to resend.</button>
          </div> */}
                      {/* 
          {
            registerationLoading ? <LoadingOutlined className={`${isExclusive? 'text-[#60457E]': 'text-[#007EAF]'} animate-spin`} /> : */}

                      <button className={`bg-white   w-full h-12 rounded-xl mt-6`}>
                          Verify
                      </button>

                      {/* } */}


                  </form>
              </div>
          </div>
      </div>
  )
}

export default Verification