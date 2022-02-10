import styled from "styled-components";
import PropTypes from 'prop-types';

const FlexContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.vertical && "column"};
    flex-wrap: ${props => props.wrap && "wrap"};
    justify-content: ${props => props.justify && props.justify};
    align-items: ${props => props.align && props.align};
    align-self: ${props => props.alignSelf && props.alignSelf};
    padding: ${props => props.padding && props.padding};
    margin: ${props => props.margin && props.margin}; 
    width: ${props => props.width ? props.width : "100%"};
    min-width: 0;
    max-height: ${props => props.maxHeight ? props.maxHeight : "auto"};
    max-width: ${props => props.maxWidth ? props.maxWidth : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    flex: ${props => props.flexSize ? props.flexSize : "unset"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};
    gap: ${props => props.gap ? props.gap : "unset"};
`;

FlexContainer.propTypes = {
    wrap: PropTypes.bool,
    vertical: PropTypes.bool,
    align: PropTypes.string,
    alignSelf: PropTypes.string,
    justify: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
    flexSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    gap: PropTypes.string
};

export default FlexContainer;