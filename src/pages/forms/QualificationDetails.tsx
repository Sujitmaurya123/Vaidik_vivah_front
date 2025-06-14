import React, { useState } from "react";

const QualificationDetailsForm: React.FC = () => {
    const [formData, setFormData] = useState({
        qualification: "",
        workingStatus: "",
        occupation: "",
        income: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add API call or navigation logic here
    };

    return (
        <div className="min-h-screen bg-[#9e2727] flex flex-col items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl text-center text-white mb-10">
                <div className="flex  justify-center">
                    <img src="/logotest3.png" alt="Logo" className="w-72 h-24 " />
                </div>
                <h2 className="text-3xl  mb-2 font-[Bembo-MT-Pro-Bold]">Your Qualification details</h2>
                <p className="text-sm font-[Bembo-MT-Pro-Light]">
                    Sharing your qualifications allows us to match you with individuals who align with your educational and career aspirations
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-transparent space-y-6 text-black font-[Bembo-MT-Pro-Regular]"
            >
                {/* Highest Qualification */}
                <div>
                    <label className="block text-white mb-1">Highest qualification*</label>
                    <select title="options"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                        required
                    >
                        <option value="">Select your highest qualification</option>
                        <option value="High School">High School</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Bachelor's">Bachelor's Degree</option>
                        <option value="Master's">Master's Degree</option>
                        <option value="PhD">PhD</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Working Status */}
                <div>
                    <label className="block text-white mb-1">Current working status</label>
                    <select title="options"
                        name="workingStatus"
                        value={formData.workingStatus}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                    >
                        <option value="">Select your working status</option>
                        <option value="Employed">Employed</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Student">Student</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Retired">Retired</option>
                    </select>
                </div>

                {/* Occupation */}
                <div>
                    <label className="block text-white mb-1">Occupation*</label>
                    <select title="options"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                        required
                    >
                        <option value="">Select your occupation</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Lawyer">Lawyer</option>
                        <option value="Government Employee">Government Employee</option>
                        <option value="Business Owner">Business Owner</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Income */}
                <div>
                    <label className="block text-white mb-1">Income*</label>
                    <select title="option"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-white/90 outline-none"
                        required
                    >
                        <option value="">Select your income</option>
                        <option value="Less than ₹2 LPA">Less than ₹2 LPA</option>
                        <option value="₹2-5 LPA">₹2-5 LPA</option>
                        <option value="₹5-10 LPA">₹5-10 LPA</option>
                        <option value="₹10-20 LPA">₹10-20 LPA</option>
                        <option value="₹20+ LPA">₹20+ LPA</option>
                    </select>
                </div>

                {/* Submit */}
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        className="bg-white text-[#007EAF] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default QualificationDetailsForm;
