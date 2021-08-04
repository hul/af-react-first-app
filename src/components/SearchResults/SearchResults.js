import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    lists: PropTypes.array,
    columns: PropTypes.array,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards, lists, columns } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map((cardData) => {
          const { columnId } = cardData;
          const column = columns.find((column) => column.id === columnId);
          let list;
          if (column) {
            list = lists.find((list) => list.id === column.listId);
            console.log(column, list);
          }
          return (
            <Card key={cardData.id} {...cardData} column={column} list={list} />
          );
        })}
      </section>
    );
  }
}

export default SearchResults;
