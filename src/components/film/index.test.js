import React from 'react';
import { shallow } from 'enzyme';
import { Films } from './index';

const setUp = (props = {}) => {
    const commponent = shallow(<Films {...props} />);
    return commponent;
}

describe('Film commponent', () => {

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                match : { params : { id : 920}},
                history : () => {return null},
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () =>{
            const component = wrapper.hasClass('container');
            expect(component).toBeTruthy();
        });
    });

});