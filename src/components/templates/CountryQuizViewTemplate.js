import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";
import Separator from "../atoms/Separator";
import BackgroundImage from "../../assets/background.png";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    min-height: 100vh;
    min-width: 320px;
    width: 100%;
    max-width: 1440px;
    padding: var(--padding-size);  
`;

const ContentLayout = styled.div`
    flex: 1;
    display: flex;
`;

const BackgroundContainer = styled.div`
    min-height: 100vh;
    min-width: 320px;
    background-size: cover;
    background: url(${BackgroundImage}) no-repeat center;
`;

const CountryQuizViewTemplate = ({Footer, children}) => {
    return(
        <BackgroundContainer>
            <Layout>
                <ContentLayout>
                    {children}
                </ContentLayout>

                {Footer &&
                    <React.Fragment>
                        <Separator height={"30px"}/>
                        <Footer/>
                    </React.Fragment>
                }
            </Layout>
        </BackgroundContainer>
    );
};

CountryQuizViewTemplate.propTypes = {
    Footer: PropTypes.func,
    children: PropTypes.node
};

export default CountryQuizViewTemplate;