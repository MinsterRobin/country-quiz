import styled from "styled-components";
import PropTypes from 'prop-types';

const P = styled.p`
    font-family: ${props => props.theme.font.family[props.family]}, "sans-serif";
    font-size: ${props => props.theme.font[props.size]};
    font-weight: ${props => props.weight};
    color: ${props => props.color};   
    
    @media (max-width: 768px) {
        font-size: ${props => props.theme.font[props.mobileSize]};
    }
`;

P.propTypes = {
    size: PropTypes.oneOf(['xxs','xs','s','r','l','xl','xxl']).isRequired,
    mobileSize: PropTypes.oneOf(['xxs','xs','s','r','l','xl','xxl']),
    weight: PropTypes.oneOf(['400','500','600','700']).isRequired,
    family: PropTypes.oneOf(["primary", "secondary"]).isRequired,
    color: PropTypes.string,
    data: PropTypes.string,
};

export {P};