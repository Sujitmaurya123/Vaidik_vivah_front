import React from "react";

const question = [
    {
        id: 5,
        text: "How long have you been looking for?",
        summary:
            "Indicate how long you’ve been on your journey to find a meaningful connection",
        options: [
            "Just started",
            "It's been a while",
            "Sometimes but not often",
        ],
    },
];

type QuestionProps = {
    selectedOptions: { questionId: number; answerValue: string | string[] }[];
    handleOptionChange: (questionId: number, answerValue: string | string[]) => void;
};



const Question4: React.FC<QuestionProps> = ({ selectedOptions, handleOptionChange }) => {


    return (
        <div>
            {question.map((ques) => (
                <div className="text-left md:text-center ">
                    <h2 className="w-full  text-2xl font-bold  md:text-3xl mb-4">
                        {ques.text}
                    </h2>
                    <p className="text-[#FFFFFF90]">{ques.summary}</p>

                    <div className="grid grid-cols-1 gap-4  md:w-auto py-4">
                        {ques.options.map((option, index) => (
                            <label
                                key={index}
                                className={`flex items-center justify-between rounded-xl text-sm h-10 cursor-pointer px-6 ${selectedOptions.some(
                                    (sel) => sel.questionId === ques.id && sel.answerValue === option
                                )
                                        ? "bg-white text-[#007EAF] h-12"
                                        : "bg-[#FFFFFF80] text-white"
                                    }`}
                            >
                                {option}
                                <input
                                    type="checkbox"
                                    className="ml-2 w-4 h-4 "
                                    checked={selectedOptions.some(
                                        (sel) => sel.questionId === ques.id && sel.answerValue === option
                                    )} onChange={() => handleOptionChange(ques.id, option)}
                                />
                            </label>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Question4;
