import React, { useState } from 'react';

const religions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Other'];
const communities = ['Brahmin', 'Rajput', 'Kayastha', 'Yadav', 'Other'];
const castes = ['General', 'OBC', 'SC', 'ST'];

const OtherDetails: React.FC = () => {
    const [form, setForm] = useState({
        religion: '',
        community: '',
        dob: '',
        tob: '',
        caste: '',
        pob: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Form Submitted:', form);
        // You can send `form` data to backend here
    };

    return (
        <div className="min-h-screen bg-[#9e2727] flex items-center justify-center px-4">
            <div className="max-w-4xl w-full  text-white p-8 rounded-lg">
                <div className="flex  justify-center">
                    <img src="/logotest3.png" alt="Logo" className="w-72 h-24 " />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-center font-[Bembo-MT-Pro-Bold]">Other Details</h1>
                <p className="text-center mb-8 font-[Bembo-MT-Pro-Light]">
                    Including additional details enriches your profile, making it easier to find meaningful and compatible connections
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-[Bembo-MT-Pro-Bold]">
                    <div>
                        <label className="block mb-1">Religion</label>
                        <select title='option'
                            name="religion"
                            value={form.religion}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-100 text-gray-700"
                        >
                            <option value="">Select Religion</option>
                            {religions.map(rel => (
                                <option key={rel} value={rel}>{rel}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1">Community</label>
                        <select title='option'
                            name="community"
                            value={form.community}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-100 text-gray-700"
                        >
                            <option value="">Select Community</option>
                            {communities.map(com => (
                                <option key={com} value={com}>{com}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1">Date of Birth</label>
                        <input title='option'
                            type="date"
                            name="dob"
                            value={form.dob}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-100 text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Time of Birth</label>
                        <input title='option'
                            type="time"
                            name="tob"
                            value={form.tob}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-100 text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Caste</label>
                        <select title='option'
                            name="caste"
                            value={form.caste}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-100 text-gray-700"
                        >
                            <option value="">Select caste</option>
                            {castes.map(cas => (
                                <option key={cas} value={cas}>{cas}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1">Place of Birth</label>
                        <input
                            type="text"
                            name="pob"
                            placeholder="Enter your place of birth"
                            value={form.pob}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-100 text-gray-700"
                        />
                    </div>
                </div>

                <div className="mt-6 flex justify-center font-[Bembo-MT-Pro-Bold]">
                    <button
                        onClick={handleSubmit}
                        className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-100 "
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OtherDetails;
