import Button from "../atoms/Button";
import styled from "styled-components";
import React from "react";
import PropTypes from 'prop-types';
import {P} from "../atoms/Typography";

const ButtonContentLayout = styled.div`
    padding: 10px 19px;
    display: flex;
    align-items: center;
`;

const AnswerButton = ({Letter, Content}) => {
    return(
        <Button>
            <ButtonContentLayout>
                <P size={"l"} weight={"500"} family={"primary"}>{Letter}</P>
                <P size={"r"} weight={"500"} family={"primary"}>{Content}</P>
            </ButtonContentLayout>
        </Button>
    )
};

AnswerButton.propTypes = {
    Letter: PropTypes.string.isRequired,
    Content: PropTypes.string.isRequired
};

export default AnswerButton
