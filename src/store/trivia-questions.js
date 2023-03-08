import Lebron1 from "../assets/trivia-images/Lebron/lebron-1.jpg";
import Lebron2 from "../assets/trivia-images/Lebron/lebron-2.jpg";
import Lebron3 from "../assets/trivia-images/Lebron/lebron-3.jpg";

import Messi1 from "../assets/trivia-images/Messi/Messi1.jpg";
import Messi2 from "../assets/trivia-images/Messi/Messi2.jpg";
import Messi3 from "../assets/trivia-images/Messi/Messi3.jpg";

import Washington1 from "../assets/trivia-images/Washington/Washington1.jpg";
import Washington2 from "../assets/trivia-images/Washington/Washington2.jpg";
import Washington3 from "../assets/trivia-images/Washington/Washington3.jpg";

export const TriviaQuestions = [
    {
        name: "Lebron James",
        clues: [
            {
                clueId: "001",
                imageSrc: Lebron1,
                hint: "This person was named to the first-team All-State football team his sophomore year of high school and played as a wide receiver",
            },

            {
                clueId: "002",
                imageSrc: Lebron2,
                hint: "All-time leading scorer in the history of the sport he now plays, and ranks fourth in career assists",
            },

            {
                clueId: "003",
                imageSrc: Lebron3,
                hint: "For most of his career, he wore this number. ",
            },
        ],
    },
    {
        name: "Washington DC",
        clues: [
            {
                clueId: "001",
                imageSrc: Washington1,
                hint: "Citizens of the place love their wine. It’s a fact that these folks drink more wine per capita than any other state in the Country where it is located. ",
            },
            {
                clueId: "002",
                imageSrc: Washington2,
                hint: "The state is home to Presidents of that Country",
            },
            {
                clueId: "003",
                imageSrc: Washington3,
                hint: "You can see the world's largest obelisk when you visit, rising to 555 feet, 5 1/8 inches",
            },
        ],
    },
    {
        name: "Lionel Messi",
        clues: [
            {
                clueId: "001",
                imageSrc: Messi1,
                hint: "Definitely one of the most famous persons from the country where he is from.",
            },
            {
                clueId: "002",
                imageSrc: Messi2,
                hint: "Made his international debut on August 17, 2005, in an international friendly match against Hungary at the Puskas Stadium in Budapest.",
            },
            {
                clueId: "003",
                imageSrc: Messi3,
                hint: "In 2022, he won a very significant trophy in the game he is well-known for",
            },
        ],
    },
];
