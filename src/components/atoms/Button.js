import styled, {css} from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const Button = styled.button`
    cursor: pointer;
    padding: ${props => props.padding ? props.padding : "inital"};
    max-width: ${props => props.maxWidth ? props.maxWidth : "inherit"};
    width: 100%;
    border-radius: 12px;
    background-color: ${props => props.variant === "outline" ? "transparent" : props.color};
    color: ${props => props.variant === "outline" ? 
        (props.color  ? 
            props.color : 
            props.font.default) :
        props.theme.font.color.default          
    };
    border: 2px solid ${props => props.color};
    
    ${props => !props.noShadow && css`
        box-shadow: 0 2px 4px ${props => props.color};
    `}    
    
    ${props => !props.disabled && css`    
        &:hover,&:focus{
            color: ${props => props.theme.font.color.default};
            border: 2px solid ${props => props.theme.warning};
            background-color: ${props => props.theme.warning};            
        }`
    }
`;

Button.propTypes = {
    variant: PropTypes.oneOf(["text", "outline"]),
    color: PropTypes.string,
    disabled: PropTypes.bool,
    noShadow: PropTypes.bool,
    padding: PropTypes.string,
    maxWidth: PropTypes.string,
    width: PropTypes.string
};

export default Button;