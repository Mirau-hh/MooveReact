import {createStore, combineReducers} from 'redux';
import page from './reducers/page';
import films from './reducers/films'

const reducer = combineReducers({
    //Reducers
    page,
    films,
});

const store = createStore(reducer);

export default store;