import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Button = styled.button`
    content: "lalalal";
    width: 100%;
    min-width: max-content;
    border-radius: 12px;
    background-color: transparent;
    color: ${props => props.theme.primary};
    border: 2px solid ${props => props.theme.primary};
    
    &:hover {
        color: ${props => props.theme.font.color.default};
        border: 2px solid ${props => props.theme.warning};
        background-color: ${props => props.theme.warning};
    }
`;

export default Button