import {type as saveFilmsType} from '../saveFilms';
import saveFilmAction from '../saveFilms';

it('Should return action', () =>{
    const payload = [{ title: 'Test1'}, { title: 'Test3'}, { title: 'Test3'}];
    const newAction = saveFilmAction(payload);
    expect(newAction).toEqual({type: saveFilmsType, payload}); //Se espera un action con el type y payload correspondientes
});