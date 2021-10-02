import PropTypes from 'prop-types';

/* =============заголовок секции============= */

const Title = ({ title }) => {
    return (
      title ?
        (<h2>{title}</h2>) :
        ("")  
    ) 
};

Title.propTypes = {
    title: PropTypes.string,
};

export default Title;