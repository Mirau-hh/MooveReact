import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './index';

const setUp = (props = {}) => {
    const commponent = shallow(<Home {...props} />);
    return commponent;
}

describe('Home commponent', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                films: [],
                page: 1,
                saveFilms: () => {return null},
                savePage: () => {return null},
                history: () => {return null},
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () =>{
            const component = wrapper.hasClass('container');
            expect(component).toBeTruthy();
        });
    });

});