import {P} from "../atoms/Typography";
import Button from "../atoms/Button";
import React from "react";
import styled, {useTheme} from "styled-components";

const Container = styled.div`
    display: flex;
    max-width: max-content;
`;

const ContentContainer = styled.div`
    padding: 15px 36px;
`;

const NextButton = () => {
    const theme = useTheme();
    return(
        <Container>
            <Button color={theme.warning}>
                <ContentContainer>
                <P size={"r"} weight={"700"} family={"primary"}>Next</P>
                </ContentContainer>
            </Button>
        </Container>
    );
};

export default NextButton