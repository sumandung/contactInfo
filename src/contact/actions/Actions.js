import * as ActionTypes from './ActionTypes';
import mock_data from '../sampledata/MockData';

export function displayInfo(isEditable,data){
	return {
		type : ActionTypes.DISPLAY_INFO,
		payload : data || mock_data,
		isEditable

	}
}

export function addEmail(){
	return {
		type : ActionTypes.ADD_EMAIL,
		payload : ''
		
	}
}

export function addTel(){
	return {
		type : ActionTypes.ADD_TEL,
		payload : ''
		
	}
}

export function handleInputChange(data){
	return {
		type : ActionTypes.HANDLE_INPUT_CHANGE,
		payload : data
		
	}
}

export function handlePhoneNoChange(data){
	return {
		type : ActionTypes.HANDLE_PHONENO_CHANGE,
		payload : data
		
	}
}

export function handleEmailChange(data){
	return {
		type : ActionTypes.HANDLE_EMAIL_CHANGE,
		payload : data
		
	}
}

export function validate(error){
	return {
		type : ActionTypes.VALIDATE,
		payload : error
		
	}
}