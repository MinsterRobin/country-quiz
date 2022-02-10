import Button from "../atoms/Button";
import React, {useState} from "react";
import AnswerButton from "../molecules/AnswerButton";
import {P} from "../atoms/Typography";
import styled, {useTheme} from "styled-components";
import {ReactComponent as UndrawAdventure} from "../../assets/undraw_adventure_4hum 1.svg";
import {ReactComponent as UndrawWinners} from "../../assets/undraw_winners_ao2o 2.svg";
import Separator from "../atoms/Separator";
import NextButton from "../molecules/NextButton";
import FlexContainer from "../atoms/Container";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
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

const Placeholder = styled.div`
    height: 54px;
    width:  84px;
    background-color: red;
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

const AnswersLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CountryQuiz = () => {
    const theme = useTheme();
    const [gameOver, setGameOver] = useState(false);
    const [isFlagQuestion, setIsFlagQuestion] = useState(true);

    return(
        <MainContainer>
            <P size={"xl"} weight={"700"} family={"primary"} color={theme.font.color.primary}>COUNTRY QUIZ</P>
            <QuizContainer>
                {gameOver ?

                    <ResultsLayout>
                        <UndrawWinners className={"undrawWinners"}/>
                        <FlexContainer vertical align={"center"}>
                            <P size={"xxl"} weight={"700"} family={"primary"} color={theme.font.color.tertiary}>Results</P>
                            <Separator height={"10px"}/>
                            <P size={"r"} weight={"400"} family={"primary"} color={theme.font.color.tertiary}>
                                You got
                                <P size={"xl"} weight={"700"} family={"primary"} color={theme.success}> 4 </P>
                                correct answers
                            </P>
                        </FlexContainer>

                        <Button
                            onClick={() => setGameOver(!gameOver)}
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
                        {isFlagQuestion &&
                            <React.Fragment>
                                <Placeholder/>
                                <Separator height={"28px"}/>
                            </React.Fragment>

                        }
                        < P size={"l"} weight={"700"} family={"primary"} color={theme.font.color.secondary}>Which country does this flag belong to maybe gna sdsf?  </P>

                        <Separator height={"32px"}/>

                        <AnswersLayout>
                            <AnswerButton Letter={"A"} Content={"Malasia"} State={"success"}/>
                            <Separator height={"25px"}/>
                            <AnswerButton Letter={"A"} Content={"Malasia"} State={"wrong"}/>
                            <Separator height={"25px"}/>
                            <AnswerButton Letter={"A"} Content={"Malasia"}/>
                            <Separator height={"25px"}/>
                            <AnswerButton Letter={"A"} Content={"Malasia"}/>
                        </AnswersLayout>

                        <Separator height={"24px"}/>
                        <NextButton onClick={() => setGameOver(!gameOver)}/>
                    </FlexContainer>

                }
            </QuizContainer>
        </MainContainer>
    )
};

export default CountryQuiz