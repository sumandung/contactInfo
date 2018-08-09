import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditInfo from '../components/EditInfo';
import * as actions from '../actions/Actions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
	return {
		info : state.reducer.details,
		hasError: true,
		error: null,
		isEditable: state.reducer.isEditable
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions : bindActionCreators(actions, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo);