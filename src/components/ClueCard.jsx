import React from "react";
import { useState } from "react";

import ReactCardFlip from "react-card-flip";

const ClueCard = ({ clue }) => {
    return (
        <ReactCardFlip
            isFlipped={isFlipped && showHintButton.requester === clue}
            flipDirection="horizontal"
        >
            <div
                aria-hidden="true"
                className="bg-black aspect-w-3 aspect-h-2 overflow-hidden rounded-lg   lg:aspect-w-5 lg:aspect-h-6"
            >
                <div className="group-hover:opacity-70 hover:duration-300 ">
                    <img
                        src={clue.imageSrc}
                        alt={clue.imageAlt}
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
                        {clue.hint}
                    </h1>
                </div>
            </div>
        </ReactCardFlip>
    );
};

export default ClueCard;
