import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component{
 static propTypes = {
   title: PropTypes.string,
 }
 render(){
   const {title} = this.props;
   return (
     <div className={styles.component}>
       <h4>{title}</h4>
     </div>
   );
 }
}

export default Card;