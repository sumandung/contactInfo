import { connect } from 'react-redux';
import DisplayInfo from '../components/DisplayInfo';
import * as actions from '../actions/Actions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
	return {
		info : state.reducer.details,
		hasError: state.reducer.details && state.reducer.details.hasOwnProperty('firstname') ? false : true,
	    error: null
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions : bindActionCreators(actions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayInfo);