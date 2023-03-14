import React, { useState } from "react";
import { TriviaQuestions } from "../store/trivia-questions";
import BottomNavButtons from "./BottomNavButtons";
import FlashCard from "./FlashCard";
import Header from "./Header";
import AnswerInput from "./AnswerInput";

const NUMBER_OF_QUESTIONS = 2;

const Trivia = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    const [userInputValue, setUserInputValue] = useState("");

    const navigationHandler = (value) => {
        if (value === "previous" && questionIndex > 0) {
            setQuestionIndex((prev) => prev - 1);
            setShowAnswer(false);
            setUserInputValue("");
            return;
        }
        if (value === "next" && questionIndex < NUMBER_OF_QUESTIONS) {
            setQuestionIndex((prev) => prev + 1);
            setShowAnswer(false);
            setUserInputValue("");
            return;
        }

        setUserInputValue(value);
        const userInput = value
            .split("")
            .filter((e) => e.trim().length)
            .join("")
            .toLowerCase();

        const currentAnswer = TriviaQuestions[questionIndex]["name"]
            .split("")
            .filter((e) => e.trim().length)
            .join("")
            .toLowerCase();

        if (userInput === currentAnswer) {
            setCorrectAnswer(true);
        } else {
            setCorrectAnswer(false);
        }

        setShowAnswer(true);
    };
    console.log("here");
    return (
        <>
            <Header />
            <FlashCard
                question={TriviaQuestions[questionIndex]}
                showAnswer={showAnswer}
                correctAnswer={correctAnswer}
                userInputValue={userInputValue}
            />
            <AnswerInput
                showAnswer={showAnswer}
                navigationHandler={navigationHandler}
            />

            <div className=" mt-40 h-40  nmx-auto max-w-2xl text-center"></div>
        </>
    );
};

export default Trivia;
