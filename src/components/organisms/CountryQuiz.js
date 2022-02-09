import Button from "../atoms/Button";
import React from "react";
import AnswerButton from "../molecules/AnswerButton";
import {P} from "../atoms/Typography";
import styled, {useTheme} from "styled-components";
import {ReactComponent as UndrawAdventure} from "../../assets/undraw_adventure_4hum 1.svg";
import Separator from "../atoms/Separator";

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
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 68px 32px;
    
    svg {
        position: absolute;
        top: -75px;
        right: 0;    
    }
`;

const AnswersLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CountryQuiz = () => {
    const theme = useTheme();

    return(
        <MainContainer>
            <P size={"xl"} weight={"700"} family={"primary"} color={theme.font.color.primary}>COUNTRY QUIZ</P>
            <QuizContainer>
                <UndrawAdventure/>
                <P size={"l"} weight={"700"} family={"primary"} color={theme.font.color.secondary}>Kuala Lumpur is the capital of</P>
                <AnswersLayout>
                    <AnswerButton Letter={"A"} Content={"Malasia"}/>
                    <Separator height={"25px"}/>
                    <AnswerButton Letter={"A"} Content={"Malasia"}/>
                    <Separator height={"25px"}/>
                    <AnswerButton Letter={"A"} Content={"Malasia"}/>
                    <Separator height={"25px"}/>
                    <AnswerButton Letter={"A"} Content={"Malasia"}/>
                </AnswersLayout>
            </QuizContainer>
        </MainContainer>
    )
};

export default CountryQuiz