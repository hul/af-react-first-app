import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

const Faq = (props) =>{
	
  const {image, title} = props.subpages[1];
  return (
    <Container>
      <Hero titleText={title} image={image}/>
      <h2>FAQ</h2>
	     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Container>
  );
};

Faq.propTypes = {
  subpages: PropTypes.array,
  title: PropTypes.node,
  image: PropTypes.string,
};

export default Faq;