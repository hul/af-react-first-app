import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component{
	
 static propTypes = {
   title: PropTypes.string,
   icon: PropTypes.string,
   cards: PropTypes.array,
 }
 
 static defaultProps = {
   icon: settings.defaultColumnIcon,
 }
	
 render(){
   const {title, icon, cards} = this.props; 
   return (
     <section className={styles.component}>
       <h3 className={styles.title}>{title}
	    <span className={styles.icon}><Icon name={icon}/></span>
       </h3>
       {cards.map(cardData => (<Card key={cardData.id} {...cardData}/>))}
     </section>
   );
 }
}

export default SearchResults;