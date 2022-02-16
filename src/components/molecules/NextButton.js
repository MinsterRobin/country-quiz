import {P} from "../atoms/Typography";
import Button from "../atoms/Button";
import React from "react";
import styled, {useTheme} from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    max-width: max-content;
`;

const ContentContainer = styled.div`
    padding: 15px 36px;
`;

const NextButton = ({onClick}) => {
    const theme = useTheme();
    return(
        <Container>
            <Button color={theme.warning} onClick={onClick}>
                <ContentContainer>
                <P size={"r"} weight={"700"} family={"primary"}>Next</P>
                </ContentContainer>
            </Button>
        </Container>
    );
};

NextButton.propTypes = {
    onClick: PropTypes.func
};

export default NextButton