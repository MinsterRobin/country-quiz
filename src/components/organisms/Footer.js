import styled from "styled-components";
import React from "react";

const FooterLayout = styled.footer`
    height: 2rem;
    
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    
    p {
        color: ${props => props.theme.font.color.default};
        font-family: ${props => props.theme.font.family.secondary};
        font-size: 14px;
        font-weight: 500;
        text-align: center;
    }
`;

const Footer = () => {
    return(
        <FooterLayout>
            <p>Created by <b><a href={"https://robin-minster.fr"}>Minster Robin</a></b></p>
        </FooterLayout>
    );
};

export default Footer;
