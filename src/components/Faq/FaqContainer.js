import {connect} from 'react-redux';
import Faq from './Faq';

const mapStateToProps = state => ({
  subpages: state.subpages,
});

export default connect(mapStateToProps)(Faq);