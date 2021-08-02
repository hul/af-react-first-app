import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  subpages: state.subpages,
});

export default connect(mapStateToProps)(Info);