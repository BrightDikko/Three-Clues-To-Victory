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
    const navigationHandler = (value) => {
        console.log(value);
        console.log(TriviaQuestions[questionIndex]["name"]);
        if (value === "previous" && questionIndex > 0) {
            setQuestionIndex((prev) => prev - 1);
            setShowAnswer(false);
        } else if (value === "show-answer") {
            setShowAnswer(true);
        }
        if (value === "next" && questionIndex < NUMBER_OF_QUESTIONS) {
            setQuestionIndex((prev) => prev + 1);
            setShowAnswer(false);
        }
    };

    return (
        <>
            <Header />
            <FlashCard
                question={TriviaQuestions[questionIndex]}
                showAnswer={showAnswer}
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
