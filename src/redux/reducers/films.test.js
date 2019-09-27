import {type as saveFilmsType} from '../actions/saveFilms';
import filmsReducer from './films';

describe('Films Redcer', () =>{
    it('Should return default state', () =>{
        const newState = filmsReducer(undefined, {});
        expect(newState).toEqual([]); //Se espera un arreglo vacio como default
    });

    it('Should return new state', () => {
        const films = [{ title: 'Test1'}, { title: 'Test3'}, { title: 'Test3'}];
        const oldState = filmsReducer(undefined, {});
        const newState = filmsReducer(undefined, {type: saveFilmsType, payload: films});
        expect(newState).toEqual([...oldState, ...films]); //Se espera que retorne el viejo estado concatenado con el nuevo
    });
});