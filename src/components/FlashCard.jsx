import { useEffect, useState } from "react";

import ReactCardFlip from "react-card-flip";

const FlashCard = ({ question, showAnswer }) => {
    const [showHintButton, setShowHintButton] = useState({
        value: false,
        requester: null,
    });

    const [isFlipped, setIsFlipped] = useState(false);
    const clues = question.clues;

    function showHintButtonHandler(value, requester) {
        setShowHintButton({ value: value, requester: requester });
        if (value === false) {
            setIsFlipped(false);
        }
    }

    function flipHandler() {
        setIsFlipped(!isFlipped);
    }

    let hiddenName1 = [];
    let hiddenName2 = [];
    let namePartBeforeSpace = question.name.split(" ")[0];
    let namePartAfterSpace = question.name.split(" ")[1];

    for (let i = 0; i < namePartBeforeSpace.length; i++) {
        if (i === 1 || i === 4) {
            hiddenName1.push(namePartBeforeSpace.charAt(i).toUpperCase());
            continue;
        }
        hiddenName1.push("🔒");
    }
    for (let i = 0; i < namePartAfterSpace.length; i++) {
        if (i === 2) {
            hiddenName2.push(namePartAfterSpace.charAt(i).toUpperCase());
            continue;
        }
        hiddenName2.push("🔒");
    }

    return (
        <div className="mx-auto max-w-xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="flex mt-8">
                <h2 className=" text-2xl font-bold tracking-tight  mr-4 text-gray-700">
                    Answer:{" "}
                </h2>
                {!showAnswer && (
                    <>
                        <p className="text-2xl font-bold tracking-wider  mr-6  text-gray-900">
                            {hiddenName1.join("")}
                        </p>
                        <p className="text-2xl font-bold tracking-wider text-gray-900">
                            {hiddenName2.join("")}
                        </p>
                    </>
                )}

                {showAnswer && (
                    <>
                        <p className="text-2xl font-bold tracking-widest  mr-3  text-gray-900">
                            {namePartBeforeSpace.toUpperCase()}
                        </p>
                        <p className="text-2xl font-bold tracking-widest text-gray-900">
                            {namePartAfterSpace.toUpperCase()}
                        </p>
                    </>
                )}
            </div>
            <h3 className="mt-8 text-base text-gray-500">
                <p className="inline font-semibold mr-1 text-gray-700">
                    Instructions:{" "}
                </p>{" "}
                Hover on individual cards to reveal clue button, click to show
                clue. When ready, click on show answer to unlock all letters of
                the answer.
            </h3>

            <div className="mt-10 space-y-12 bg lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                <a
                    key={`${0}`}
                    className="relative group block"
                    onMouseEnter={showHintButtonHandler.bind(
                        this,
                        true,
                        clues[0]
                    )}
                    onMouseLeave={showHintButtonHandler.bind(
                        this,
                        false,
                        clues[0]
                    )}
                >
                    <ReactCardFlip
                        isFlipped={
                            isFlipped && showHintButton.requester === clues[0]
                        }
                        flipDirection="horizontal"
                    >
                        <div
                            aria-hidden="true"
                            className="bg-black aspect-w-3 aspect-h-2 overflow-hidden rounded-lg   lg:aspect-w-5 lg:aspect-h-6"
                        >
                            <div className="group-hover:opacity-70 hover:duration-300 ">
                                <img
                                    src={clues[0].imageSrc}
                                    alt={clues[0].imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        <div
                            aria-hidden="true"
                            className="bg-sky-800 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg   lg:aspect-w-5 lg:aspect-h-6"
                        >
                            <div className="flex flex-col justify-center items-center  ">
                                <h1 className="text-white px-20 text-center">
                                    {clues[0].hint}
                                </h1>
                            </div>
                        </div>
                    </ReactCardFlip>

                    {showHintButton.value &&
                        showHintButton.requester === clues[0] && (
                            <div className="absolute top-[50%] -mt-5 left-[50%] flex flex-col justify-center items-center ">
                                {!isFlipped && (
                                    <button
                                        type="button"
                                        className=" -ml-[50px]  h-10 w-[100px] rounded-md bg-gray-200 py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:duration-300 active:bg-gray-500 active:text-white"
                                        onClick={flipHandler}
                                    >
                                        Show Clue
                                    </button>
                                )}
                            </div>
                        )}
                </a>
                <a
                    key={`${1}`}
                    className="relative group block"
                    onMouseEnter={showHintButtonHandler.bind(
                        this,
                        true,
                        clues[1]
                    )}
                    onMouseLeave={showHintButtonHandler.bind(
                        this,
                        false,
                        clues[1]
                    )}
                >
                    <ReactCardFlip
                        isFlipped={
                            isFlipped && showHintButton.requester === clues[1]
                        }
                        flipDirection="horizontal"
                    >
                        <div
                            aria-hidden="true"
                            className="bg-black aspect-w-3 aspect-h-2 overflow-hidden rounded-lg   lg:aspect-w-5 lg:aspect-h-6"
                        >
                            <div className="group-hover:opacity-70 hover:duration-300 ">
                                <img
                                    src={clues[1].imageSrc}
                                    alt={clues[1].imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        <div
                            aria-hidden="true"
                            className="bg-sky-800 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg   lg:aspect-w-5 lg:aspect-h-6"
                        >
                            <div className="flex flex-col justify-center items-center  ">
                                <h1 className="text-white px-20 text-center">
                                    {clues[1].hint}
                                </h1>
                            </div>
                        </div>
                    </ReactCardFlip>

                    {showHintButton.value &&
                        showHintButton.requester === clues[1] && (
                            <div className="absolute top-[50%] -mt-5 left-[50%] flex flex-col justify-center items-center ">
                                {!isFlipped && (
                                    <button
                                        type="button"
                                        className=" -ml-[50px]  h-10 w-[100px] rounded-md bg-gray-200 py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:duration-300 active:bg-gray-500 active:text-white"
                                        onClick={flipHandler}
                                    >
                                        Show Clue
                                    </button>
                                )}
                            </div>
                        )}
                </a>
                <a
                    key={`${2}`}
                    className="relative group block"
                    onMouseEnter={showHintButtonHandler.bind(
                        this,
                        true,
                        clues[2]
                    )}
                    onMouseLeave={showHintButtonHandler.bind(
                        this,
                        false,
                        clues[2]
                    )}
                >
                    <ReactCardFlip
                        isFlipped={
                            isFlipped && showHintButton.requester === clues[2]
                        }
                        flipDirection="horizontal"
                    >
                        <div
                            aria-hidden="true"
                            className="bg-black aspect-w-3 aspect-h-2 overflow-hidden rounded-lg   lg:aspect-w-5 lg:aspect-h-6"
                        >
                            <div className="group-hover:opacity-70 hover:duration-300 ">
                                <img
                                    src={clues[2].imageSrc}
                                    alt={clues[2].imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        <div
                            aria-hidden="true"
                            className="bg-sky-800 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg   lg:aspect-w-5 lg:aspect-h-6"
                        >
                            <div className="flex flex-col justify-center items-center  ">
                                <h1 className="text-white px-20 text-center">
                                    {clues[2].hint}
                                </h1>
                            </div>
                        </div>
                    </ReactCardFlip>

                    {showHintButton.value &&
                        showHintButton.requester === clues[2] && (
                            <div className="absolute top-[50%] -mt-5 left-[50%] flex flex-col justify-center items-center ">
                                {!isFlipped && (
                                    <button
                                        type="button"
                                        className=" -ml-[50px]  h-10 w-[100px] rounded-md bg-gray-200 py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 hover:duration-300 active:bg-gray-500 active:text-white"
                                        onClick={flipHandler}
                                    >
                                        Show Clue
                                    </button>
                                )}
                            </div>
                        )}
                </a>
            </div>
        </div>
    );
};

export default FlashCard;
