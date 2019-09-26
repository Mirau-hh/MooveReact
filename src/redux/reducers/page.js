import { type as savePageType} from '../actions/savePage';

const defaultState = 0;

function reducer(state = defaultState, {type, payload}) {
    switch(type){
        case savePageType:{
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;