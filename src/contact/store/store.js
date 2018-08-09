import { combineReducers, createStore } from 'redux';
import Reducer from '../reducers/Reducer';

let rootReducer = combineReducers({
	reducer : Reducer
})

export default function configureStore(){
	return createStore(  rootReducer, 
						  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
					  );
}