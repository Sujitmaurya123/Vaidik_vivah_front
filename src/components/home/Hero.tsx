import { Link } from "react-router-dom";
// import heroImg from "../../assets/bg.png";
import heroImg from "../../assets/Banner-7.jpeg";

function Hero() {
  return (
    <div
      className="relative hero_section  bg-cover  bg-no-repeat   overflow-hidden min-h-screen 7xl:h-[100vh]   top-0 py-0   sm:py-0 3xl:h-[100vh]  xl:h-[100vh]   5xl:h-[100vh]   4xl:h-[100vh]  "
      style={{
        backgroundImage: `url(${heroImg})`,
        width: "100%",
        opacity:"95%"
        // Zoom effect (adjust percentage as needed)
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="relative 3xl:pl-30   bg-opacity-40 text-white min-h-screen md:pl-16 md:flex md:px-10 gap-80 ">
        <div className="  2xl:px-20 py-28 max-md:mt-0 mt-10 xl:w-[100%] flex justify-center items-start">
          <div className=" text-center container   xl:w-[100%]  hero_content ">
            <h1 className="text-[3rem] sm:text-[60px]  md:text-[80px] lg:text-[100px] xl:text-[80px] text-[#FFFFFF] font-Bembo-MT-Pro-Bold leading-[60px] md:leading-[80px] lg:leading-[150px] xl:leading-[120px]  pt-32 xl:-tracking-normal">
              जहाँ मिलती हैं पूर्वजन्म की जोड़ियाँ
            </h1>
            <p
              className="  text-[#FFFFFF] py-10 text-[18px] xl:text-[28px] xl:pt-5 px-2 font-Bembo-MT-Pro-Regular"
              style={{
                lineHeight: "42px",
                letterSpacing: "2%",
                fontWeight: "400",
              }}
            >
              यहाँ हर विवाह एक धर्म है, हर मिलन एक मंत्र।
            </p>

            <Link
              to="/questions"
              className="relative z-10 flex items-center justify-center bg-[#9e2727] rounded-full w-[249px] h-[64px] text-[22px] text-white mx-auto xl:mt-8 font-Proxima-Nova-SemiBold"
            >
              <span>Start free today</span>
            </Link>
          </div>

          {/* mobile card in hero section 
          <div className="absolute top-[60px] right-[130px] backdrop-blur backdrop-brightness-125 rounded-3xl w-[25%] h-[73%]   border-8 border-white-2 flex items-center justify-center hidden  md:block 3xl:mr-[5%] lg:hidden" ></div>
         */}
        </div>
        <div
          className="absolute  bottom-36 -right-7 sm:pt-40  md:bottom-[15rem] md:right-[4rem] xl:bottom-60   xl:right-[4rem] 2xl:rigth-[4rem]  3xl:ml-[18%]  "
          style={{ transform: "translateY(50%)" }}
        >
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
