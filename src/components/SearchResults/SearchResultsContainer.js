import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux.js';

//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, props) => {
  return {
    cards: getCardsForSearchResults(state, props.match.params.id),
    lists: state.lists,
    columns: state.columns,
  };
};

export default connect(mapStateToProps)(SearchResults);
