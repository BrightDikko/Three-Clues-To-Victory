import React from "react";

function Header() {
    return (
        <div className="bg-gray-900 flex flex-col justify-between pt-16 pb-8 px-6 sm:pt-24 sm:pb-8 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold  pb-5 text-white sm:text-6xl">
                    Three Clues to Victory
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    "Three Clues to Victory" is a fun trivia game that
                    challenges players to solve a mystery using three cryptic
                    clues. With various random categories and difficulty levels,
                    players can compete against each other or work together as a
                    team to guess the answer before time runs out.
                </p>
            </div>

            <div className="pt-10 flex justify-center">
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Developed by Bright Dikko
                </p>
            </div>
        </div>
    );
}
export default Header;
