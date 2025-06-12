import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const slides = [
    {
        id: 1,
        image: "/aadityneha.jpeg",
        name: "Aaditya & Sneha Sharma",
        date: "March 2025",
        location: "Gaya, Bihar",
        bond: "Both initiated in Gayatri Parivar",
        description:
            "We met on Vaidik Vivah and felt an instant connection rooted in shared values and Sanatan dharma. Today, we are not just husband and wife, but soul companions on a spiritual journey."
    },
    {
        id: 2,
        image: "/weddingimg2.jpg",
        name: "Aakash & Anjali ",
        date: "April 2025",
        location: "Patna, Bihar",
        bond: "Both initiated in Gayatri Parivar",
        description:
            "We met on Vaidik Vivah and felt an instant connection rooted in shared values and Sanatan dharma. Today, we are not just husband and wife, but soul companions on a spiritual journey."
    },
    {
        id: 2,
        image: "/weddingimg3.jpeg",
        name: "Aaditya & Sneha Sharma",
        date: "March 2025",
        location: "Gaya, Bihar",
        bond: "Both initiated in Gayatri Parivar",
        description:
            "We met on Vaidik Vivah and felt an instant connection rooted in shared values and Sanatan dharma. Today, we are not just husband and wife, but soul companions on a spiritual journey."
    },
    // Add more slides here if needed
];

export default function WeddingSlider() {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    // Auto-slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="w-full  mx-auto  px-4 relative  py-12 md:py-20">
            <div className="relative  flex justify-center bg-white rounded-2xl shadow-xl p-6  gap-4 lg:gap-1 items-center">
                <div className="overflow-hidden rounded-2xl w-1/2 ml-3 font-[Bembo-MT-Pro-Regular]">
                    <img
                        src={slides[current].image}
                        alt={slides[current].name}
                        width={500}
                        height={600}
                        className="rounded-2xl ml-3 object-cover"
                    />
                </div>
                <div className="space-y-4 text-center md:text-left w-1/2 font-[Bembo-MT-Pro-Regular] ml-9 lg:ml-1">
                    <h2 className="text-2xl font-bold italic text-rose-700">
                        "{slides[current].name}"
                    </h2>
                    <p className="text-rose-600  text-wrap">{slides[current].description}</p>
                    <div className="text-rose-700 space-y-1">
                        <p>⭐ Married in: {slides[current].date}</p>
                        <p>📍 From: {slides[current].location}</p>
                        <p>⛩ Common Bond: {slides[current].bond}</p>
                    </div>
                </div>
                <button title="button"
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                    <ChevronLeft className="text-rose-600" />
                </button>
                <button title="button"
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                    <ChevronRight className="text-rose-600" />
                </button>
            </div>
        </div>
    );
}
