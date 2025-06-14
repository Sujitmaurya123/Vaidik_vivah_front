import React, { useState } from "react";

const PersonalDetails: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        displayName: "",
        contactNumber: "",
        maritalStatus: "",
        numberOfChildren: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); // Replace with submit logic
    };

    return (
        <div className="min-h-screen bg-[#9e2727] flex flex-col items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-transparent text-white text-center mb-8">
               <div className="flex  justify-center">
                    <img src="/logotest3.png" alt="Logo" className="w-72 h-24 " />
               </div>
                <h1 className="text-3xl font-[Bembo-MT-Pro-Bold]">Add your personal details</h1>
                <p className="mt-2 text-sm font-[Bembo-MT-Pro-Light]">
                    Share your details to build a tailored profile and connect with compatible matches.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-transparent space-y-5 text-black font-[Bembo-MT-Pro-Regular]"
            >
                {/* Name */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <label className="block text-white mb-1">Your name*</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-transparent mb-1">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                        />
                    </div>
                </div>

                {/* Display Name */}
                <div>
                    <label className="block text-white mb-1">Display name</label>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="Display name"
                        value={formData.displayName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label className="block text-white mb-1">Contact number*</label>
                    <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Contact number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                        required
                    />
                </div>

                {/* Marital Status & Children */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                        <label className="block text-white mb-1">Marital status*</label>
                        <select title="options"
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                            required
                        >
                            <option value="">Select your marital status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label className="block text-white mb-1">Number of children</label>
                        <select title="options"
                            name="numberOfChildren"
                            value={formData.numberOfChildren}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                        >
                            <option value="">Select number of children</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3 or more</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-white mb-1">Describe about yourself*</label>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-white/90 outline-none min-h-[120px]"
                        required
                    ></textarea>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-white text-[#007EAF] font-semibold py-2 rounded hover:bg-gray-100 transition"
                >
                    Continue
                </button>
            </form>
        </div>
    );
};

export default PersonalDetails;
