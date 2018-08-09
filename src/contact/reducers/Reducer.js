import React from 'react';
import * as ActionTypes from '../actions/ActionTypes';

const INITIAL_STATE = {
	details : null,
	isEditable : false
};

export default function Reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ActionTypes.DISPLAY_INFO: {
			return Object.assign({}, state, {
				details: action.payload,
				isEditable: action.payload.isEditable
			});
		}
		case ActionTypes.ADD_EMAIL: {
			const length = (Object.keys(state.details.secondaryEmails).length)+1;
			return Object.assign({}, state,  {
				details: {
					...state.details,
					secondaryEmails : {...state.details.secondaryEmails,['em'+length]:action.payload}
				}
			});
		}
		case ActionTypes.ADD_TEL: {
			const length = (Object.keys(state.details.secondaryPhoneNumbers).length)+1;
			return Object.assign({}, state,  {
				details: {
					...state.details,
					secondaryPhoneNumbers : {...state.details.secondaryPhoneNumbers,['pn'+length]:action.payload}
				}
			});	
		}
		case ActionTypes.HANDLE_INPUT_CHANGE: {
			const {fieldname,value} = action.payload;
			return Object.assign({}, state, {
				details: {
					...state.details,
					[fieldname]:value
				}
			});
		}
		case ActionTypes.HANDLE_PHONENO_CHANGE: {
			const {fieldname,value} = action.payload;
			return Object.assign({}, state, {
				details: {
					...state.details,
					secondaryPhoneNumbers : {
						...state.details.secondaryPhoneNumbers,
						[fieldname]:value
					}
				}
			});
		}
		case ActionTypes.HANDLE_EMAIL_CHANGE: {
			const {fieldname,value} = action.payload;
			return Object.assign({}, state, {
				details: {
					...state.details,
					secondaryEmails : {
						...state.details.secondaryEmails,
						[fieldname]:value
					}
					
				}
			});
		}
		case ActionTypes.VALIDATE: {
			const {fieldname,value} = action.payload;
			return Object.assign({}, state, {
				details: {
					...state.details,
					[fieldname]:value
				}
			});
		}
		default : {
			return state;
		}
	}
}