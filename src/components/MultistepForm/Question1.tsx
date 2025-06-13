import React from "react";

const questions = [
    {
        id: 1,
        text: "I am a",
        options: ["Man", "Woman", "Non-binary"],
    },
    {
        id: 2,
        text: "I am looking for a",
        options: ["Man", "Woman", "Non-binary"],
    },
];



type QuestionProps = {
    selectedOptions: { questionId: number; answerValue: string | string[] }[];
    handleOptionChange: (questionId: number, answerValue: string | string[]) => void;
};


const Question1: React.FC<QuestionProps> = ({ selectedOptions, handleOptionChange }) => {
    return (
        <div className="flex flex-col gap-10 py-6">
            {questions.map((question) => (
                <div key={question.id}>
                    <p className="font-Proxima-Nova-SemiBold text-white text-xl sm:text-2xl md:text-3xl mb-6">
                        {question.text}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {question.options.map((option, index) => {
                            const isSelected = selectedOptions.some(
                                (sel) => sel.questionId === question.id && sel.answerValue === option
                            );

                            return (
                                <label
                                    key={index}
                                    htmlFor={`option-${question.id}-${index}`}
                                    className={`relative border rounded-xl px-6 py-4 cursor-pointer transition-all duration-200 shadow-md ${isSelected
                                            ? "bg-white text-[#007EAF] border-[#007EAF]"
                                            : "bg-[#FFFFFF20] text-white border-transparent"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-base sm:text-lg font-medium">{option}</span>
                                        <input
                                            id={`option-${question.id}-${index}`}
                                            type="checkbox"
                                            className="hidden"
                                            checked={isSelected}
                                            onChange={() => handleOptionChange(question.id, option)}
                                        />
                                        <span
                                            className={`w-5 h-5 inline-block ml-4 rounded-full border-2 ${isSelected ? "bg-[#007EAF] border-[#007EAF]" : "border-white"
                                                }`}
                                        />
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
      
    );
};

export default Question1;
