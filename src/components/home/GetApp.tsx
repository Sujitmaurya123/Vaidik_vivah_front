

import '../../font.css';

const GetApp = () => {
    return (
        <div className="bg-[#FD5C90] py-10 px-6 flex justify-center">
            <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center max-w-6xl w-full shadow-md">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FD5C90] mb-4">
                        Happiness is Just an App Away!
                    </h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Find your right match with{" "}
                        <a
                            href="https://vaidik-vivah-front.vercel.app"
                            className="text-pink-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vaidikvivah
                        </a>
                    </p>

                    {/* App Store Buttons */}
                    <div className="flex justify-center md:justify-start gap-4">
                        <img
                                                        src="/appstore.png"
                                                        alt="Apple Store"
                                                        className="object-contain h-12"
                                                    />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play"
                            className="h-12"
                        />
                    </div>
                </div>

                {/* Right Side – QR Code in Mobile Mockup */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="Qrmobile.png" // Or move to public/ and use relative path
                        alt="QR Code in Phone"
                        className="max-w-xs w-full rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>

    );
};

export default GetApp;


// import '../../font.css';

// const GetApp = () => {
//     return (
//         <div className="w-full h-auto bg-[#a44949] relative">
//             <div className="text-white relative overflow-hidden px-5 sm:px-20 container mx-auto space-y-6 py-5 md:py-12">
//                 <div className="flex flex-col md:flex-row justify-between items-center gap-8">

//                     {/* Text Part */}
//                     <div className="flex-1 w-full">
//                         <h1 className="text-[28px] md:text-[48px] xl:text-[64px] xl:leading-[83.2px] font-[Bembo-MT-Pro-Bold] tracking-[-0.02em]">
//                             Get the app!
//                         </h1>
//                         <p className="text-[20px] font-[Bembo-MT-Pro-Light] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] pt-5 leading-[30px] sm:leading-[10px] md:leading-[24px] lg:leading-[28px] xl:leading-[42px]">
//                             Download our app now to discover meaningful
//                             <br className="hidden md:block" /> matches with smart AI compatibility.
//                         </p>
//                     </div>

//                     {/* Logo Button Part */}
//                     <div className="flex flex-1 w-full justify-start md:justify-end items-center space-x-4 mt-4 md:mt-0 gap-3">
//                         <button
//                             className="p-0 m-0 flex items-center"
//                             onClick={() =>
//                                 window.open(
//                                     "https://play.google.com/store/apps/details?id=com.wedlock.wedlock_application",
//                                     "_blank"
//                                 )
//                             }
//                         >
//                             <img
//                                 src="/googleplay.png"
//                                 alt="Play Store"
//                                 className="object-contain h-24 max-md:h-auto"
//                             />
//                         </button>

//                         <button className="p-0 m-0 flex items-center pb-1">
//                             {/* Uncomment when Apple link is ready */}
//                             {/* onClick={() => window.open("https://apps.apple.com/app/idXXXXXXXXX", "_blank")} */}
//                             <img
//                                 src="/appstore.png"
//                                 alt="Apple Store"
//                                 className="object-contain h-24 max-md:h-auto"
//                             />
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GetApp;
