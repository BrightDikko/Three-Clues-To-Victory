import React from "react";
import { useState } from "react";

const AnswerInput = ({ showAnswer, navigationHandler }) => {
    const [enteredValue, setEnteredValue] = useState("");
    let displayAnswer = "🔐  Submit Answer";
    let answerShown = "🔓  Answer Available";

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const submissionHandler = () => {
        setEnteredValue("");
        navigationHandler(enteredValue);
    };

    return (
        <form
            onSubmit={(event) => event.preventDefault()}
            className="flex flex-col justify-center items-center mt-6"
        >
            <input
                type="text"
                name="name"
                id="name"
                autoCorrect="off"
                aria-autocomplete="off"
                value={enteredValue}
                className="block min-w-[400px] h-14 px-5 text-lg mx-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                placeholder="Enter your answer"
                onChange={inputChangeHandler}
            />
            <div className=" flex justify-center items-center my-10  px-6 lg:px-8">
                <div className=" flex justify-between space-x-4 align-ceter mx-auto max-w-2xl text-center">
                    <button
                        type="button"
                        className=" rounded-md bg-gray-200 py-5 px-5  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:duration-300 active:bg-gray-500 active:text-white"
                        onClick={navigationHandler.bind(this, "previous")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="w-80 text-xl rounded-md bg-slate-700 py-5 px-10 font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-500 hover:duration-300 active:bg-yellow-100 active:text-black "
                        onClick={submissionHandler}
                    >
                        {!showAnswer && displayAnswer}
                        {showAnswer && answerShown}
                    </button>
                    <button
                        type="button"
                        className=" rounded-md bg-gray-200 py-5 px-5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:duration-300 active:bg-gray-500 active:text-white"
                        onClick={navigationHandler.bind(this, "next")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
};
export default AnswerInput;
