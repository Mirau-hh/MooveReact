import {type as saveFilmsType} from '../actions/saveFilms';


const defaultState = [
];

function reducer(state = defaultState, {type, payload}) {
    switch(type){
        case saveFilmsType: {
            return [...state, ...payload];
        }
        default:
            return state;
    }
}

export default reducer;