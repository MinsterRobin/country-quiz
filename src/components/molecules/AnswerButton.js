import Button from "../atoms/Button";
import styled, {useTheme} from "styled-components";
import React from "react";
import PropTypes from 'prop-types';
import {P} from "../atoms/Typography";
import {ReactComponent as CheckCircle} from "../../assets/CheckCircle.svg";
import {ReactComponent as WrongCircle} from "../../assets/WrongCircle.svg";
import Separator from "../atoms/Separator";

const ButtonContentLayout = styled.div`
    padding: 10px 19px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    
    svg {
        justify-self: flex-end;
        height: 20px;
        width: 20px;
    }
`;

const ButtonContentSubLayout = styled.div`
    display: flex;
    align-items: center;
`;

const AnswerButton = ({Letter, Content, State, onClick}) => {
    const theme = useTheme();

    return(
        <Button
            onClick={onClick}
            color={!State ? theme.primary : (State === "success" ? theme.success : theme.danger)}
            variant={!State && "outline"}
            disabled={!!State}
            noShadow>
            <ButtonContentLayout>
                <ButtonContentSubLayout>
                    <P size={"l"} weight={"500"} family={"primary"}>{Letter}</P>
                    <Separator minWidth={"10px"} maxWidth={"47px"} width={"47px"}/>
                    <P size={"r"} weight={"500"} family={"primary"}>{Content}</P>
                </ButtonContentSubLayout>
                {State && (
                    State === "success" ?
                        <CheckCircle fill={theme.background}/> :
                        <WrongCircle fill={theme.background}/>
                    )
                }
            </ButtonContentLayout>
        </Button>
    )
};

AnswerButton.propTypes = {
    Letter: PropTypes.string.isRequired,
    Content: PropTypes.string.isRequired,
    State: PropTypes.oneOf(["success", "wrong"]),
    onClick: PropTypes.func
};

export default AnswerButton;
