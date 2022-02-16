import Button from "../atoms/Button";
import React, {useEffect, useState} from "react";
import AnswerButton from "../molecules/AnswerButton";
import {P} from "../atoms/Typography";
import styled, {useTheme} from "styled-components";
import {ReactComponent as UndrawAdventure} from "../../assets/undraw_adventure_4hum 1.svg";
import {ReactComponent as UndrawWinners} from "../../assets/undraw_winners_ao2o 2.svg";
import Separator from "../atoms/Separator";
import NextButton from "../molecules/NextButton";
import FlexContainer from "../atoms/Container";
import getRandomInt from "../../utils/getRandomInt";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
`;

const QuizContainer = styled.div`
    position: relative;
    border-radius: 24px;
    background-color: ${props => props.theme.background};
    width: 100%;

    min-height: 542px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;    
    
    .undrawAdventure {
        position: absolute;
        top: -75px;
        right: 0;    
    }
    
    .undrawWinners {
        align-self: center;
    }
`;

const ResultsLayout = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 49px 32px 33px;
`;

const Flag = styled.img`
    width: 84px;
    height: 54px;
`;

const CountryQuiz = () => {
    const theme = useTheme();
    const [gameOver, setGameOver] = useState(false);
    const [points, setPoints] = useState(0);

    const [error, setError] = useState(null);
    const [euCountryData, setEuCountryData] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [isPreparingQuestion, setIsPreparingQuestion] = useState(true);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedProposition, setSelectedProposition] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const [question, setQuestion] = useState(null);

    const setupQuestion = () => {
        setShowAnswer(false);
        let isFlagQuestion = getRandomInt(2) === 0;
        let question = {};

        let propositions = [];
        for (let i = 0; i  <= 3; i++) {
            let letter = "";
            switch (i) {
                case 0:
                    letter = "A";
                    break;
                case 1:
                    letter = "B";
                    break;
                case 2:
                    letter = "C";
                    break;
                case 3:
                    letter = "D";
                    break;
            }

            let randomId = getRandomInt(euCountryData.length);
            while (propositions.findIndex(e => e.id === randomId) > -1) {
                randomId = getRandomInt(euCountryData.length);
            }

            propositions.push({
                id: randomId,
                letter: letter,
                country: euCountryData[randomId].name.common,
                flag: euCountryData[randomId].flags.png,
                capital: euCountryData[randomId].capital
            });
        }

        let answerCountryId = getRandomInt(4);

        if (isFlagQuestion) {
            question = {
                entitled: "Which country does this flag belong to ?",
                flag: propositions[answerCountryId].flag,
                answerLetter: propositions[answerCountryId].letter,
            };
        } else if (!isFlagQuestion) {
            question = {
                entitled: propositions[answerCountryId].capital + " is the capital of",
                answerLetter: propositions[answerCountryId].letter,
            };
        }

        question = ({...question, propositions});

        setQuestion(question);
        setIsPreparingQuestion(false);
    };

    const checkAnswer = (selectedPropositionLetter) => {
        setSelectedProposition(selectedPropositionLetter);

        if (selectedPropositionLetter === question.answerLetter) {
            setPoints(points + 1 );
            setShowAnswer(true);

        } else {
            setShowAnswer(true);
            setGameOver(true);
        }
    };

    const resetQuiz = () => {
        setPoints(0);
        setGameOver(false);
        setupQuestion();
        setShowResults(false);
    };

    const getEuCountryData = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/subregion/europe?fields=name,flags,capital");
            if (!response.ok) {
                throw new Error('This is an HTTP error: The status is' + response.status);
            }
            let data = await response.json();
            setEuCountryData(data);
            setError(null);
            return true
        } catch (e) {
            setError(e.message);
            setEuCountryData(null);
            return false
        } finally {
            setIsLoadingData(false);
        }
    };

    useEffect(() => {
        getEuCountryData();
    },[]);

    useEffect(() => {
        try {
            euCountryData && setupQuestion();
        } catch (e) {
            setError(e.message);
        }
    }, [euCountryData]);

    return(
        <MainContainer>
            <P size={"xl"} weight={"700"} family={"primary"} color={theme.font.color.primary}>COUNTRY QUIZ</P>

            <QuizContainer>
                { error && <P size={"l"} weight={"500"} family={"primary"}>{'There is a problem fetching the post data' + error}</P>}

                {isLoadingData ?
                    <FlexContainer width={"100%"} flexSize={1} align={"center"} justify={"center"}>
                        <P size={"l"} weight={"500"} family={"primary"}>A moment please...</P>
                    </FlexContainer>:

                    isPreparingQuestion ?
                        <P size={"l"} weight={"500"} family={"primary"}>Question is loading ...</P> :
                        showResults ?
                            <ResultsLayout>
                                <UndrawWinners className={"undrawWinners"}/>
                                <FlexContainer vertical align={"center"}>
                                    <P size={"xxl"} weight={"700"} family={"primary"}
                                       color={theme.font.color.tertiary}>Results</P>
                                    <Separator height={"10px"}/>
                                    <P size={"r"} weight={"400"} family={"primary"} color={theme.font.color.tertiary}>
                                        You got
                                        <P as='span' size={"xl"} weight={"700"} family={"primary"}
                                           color={theme.success}> {points} </P>
                                        correct answers
                                    </P>
                                </FlexContainer>

                                <Button
                                    onClick={() => resetQuiz()}
                                    variant={"outline"}
                                    color={theme.font.color.tertiary}
                                    padding={"18px 61px"}
                                    maxWidth={"215px"}
                                    noShadow>
                                    <P size={"r"} weight={"600"} family={"primary"}>Try Again</P>
                                </Button>
                            </ResultsLayout> :

                            <FlexContainer vertical justify={"space-between"} flexSize={1} padding={"68px 32px 32px"}>
                                <UndrawAdventure className={"undrawAdventure"}/>
                                {question.flag &&
                                    <React.Fragment>
                                        <Flag src={question.flag} alt={"flag"}/>
                                        <Separator height={"28px"}/>
                                    </React.Fragment>}
                                < P size={"l"} weight={"700"} family={"primary"} color={theme.font.color.secondary}>{question.entitled}</P>

                                <Separator height={"32px"}/>
                                <FlexContainer vertical width={"100%"} gap={"25px"}>
                                    {question.propositions.map(proposition =>
                                        <AnswerButton
                                            key={proposition.letter}
                                            Letter={proposition.letter}
                                            Content={proposition.country}
                                            disabled={showAnswer}
                                            State={showAnswer ?
                                                ((question.answerLetter === proposition.letter && "success") || (selectedProposition === proposition.letter ? (proposition.letter === question.answerLetter ? "success" : "wrong") : null)) : null
                                            }
                                            onClick={() => checkAnswer(proposition.letter)}
                                        />
                                    )}
                                </FlexContainer>

                                <Separator height={"24px"}/>
                                {showAnswer && <NextButton onClick={() => gameOver ? setShowResults(true) : setupQuestion()}/>}
                            </FlexContainer>
                }
            </QuizContainer>
        </MainContainer>
    )
};

export default CountryQuiz