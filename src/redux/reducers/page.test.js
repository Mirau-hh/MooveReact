import { type as savePageType} from '../actions/savePage';
import pageReducer from './page';

describe('Page Redcer', () =>{
    it('Should return default state', () =>{
        const newState = pageReducer(undefined, {});
        expect(newState).toEqual(0); //Se espera un valor inicioal de 0
    });

    it('Should return new state', () => {
        const page = 1;
        const newState = pageReducer(undefined, {type: savePageType, payload: page});
        expect(newState).toEqual(page); //Se espera que el estado se actualice e iguale al payload
    });
});