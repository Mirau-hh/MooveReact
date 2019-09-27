import { type as savePageType} from '../savePage';
import savePageAction from '../savePage';

it('Should return action', () =>{
    const payload = 1;
    const newAction = savePageAction(payload);
    expect(newAction).toEqual({type: savePageType, payload}); //Se espera un action con el type y payload correspondientes
});