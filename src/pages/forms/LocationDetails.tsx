import React, { useState } from "react";

const LocationDetails: React.FC = () => {
    const [citizenship, setCitizenship] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle save logic here
        console.log({ citizenship, country, state });
    };

    return (
        <div className="min-h-screen bg-[#9e2727] flex flex-col items-center justify-center px-4">
            <div className="text-center text-white mb-8">
                <div className="flex  justify-center">
                    <img src="/logotest3.png" alt="Logo" className="w-72 h-24 " />
                </div>
                <h1 className="text-4xl font-[Bembo-MT-Pro-Bold] mb-2">Your Location details</h1>
                <p className="text-lg font-[Bembo-MT-Pro-Light]">
                    Adding your location helps us find matches nearby or in regions that
                    suit your preferences
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className=" w-full max-w-2xl space-y-4 font-[Bembo-MT-Pro-Light]"
            >
                <div>
                    <label className="block text-white text-sm mb-1">Citizenship*</label>
                    <select title="options"
                        value={citizenship}
                        onChange={(e) => setCitizenship(e.target.value)}
                        className="w-full p-3 rounded-md bg-gray-100 text-gray-700"
                        required
                    >
                        <option value="">Select your Citizenship</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                       s
                        {/* Add more options */}
                    </select>
                </div>

                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label className="block text-white text-sm mb-1">
                            Current Location*
                        </label>
                        <select title="options"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full p-3 rounded-md bg-gray-100 text-gray-700"
                            required
                        >
                            <option value="">Country</option>
                            <option value="India">India</option>
                            
                            <option value="USA">USA</option>
                            {/* Add more options */}
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block text-white text-sm mb-1">State</label>
                        <select title="options"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="w-full p-3 rounded-md bg-gray-100 text-gray-700"
                        >
                            <option value="">State</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Delhi">Delhi</option>
                            {/* Add more options */}
                        </select>
                    </div>
                </div>

                

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-white text-[#0078A8] font-semibold px-8 py-2 rounded-md hover:bg-gray-100"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LocationDetails;
