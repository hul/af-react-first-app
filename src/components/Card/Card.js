import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    list: PropTypes.object,
    column: PropTypes.object,
  };
  render() {
    const { title, column, list } = this.props;
    return (
      <div className={styles.component}>
        <h4>{title}</h4>
        {JSON.stringify(column)}
        {JSON.stringify(list)}
      </div>
    );
  }
}

export default Card;
