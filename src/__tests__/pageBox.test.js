import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
import PageBox from "../component/PageBox";

Enzyme.configure({ adapter: new Adapter() });

describe('test pageBox component ', () => {

    const mockGotoFunction = jest.fn();
    const props = {
        goTo: mockGotoFunction,
        pageText: 1
    };

    it('should render a li tab', function () {
        const wrapper = shallow(<PageBox {...props} />);
        expect(wrapper.find("li").length).toBe(1);
    });

    it('should render the pageText given by parent component', function () {
        const wrapper = shallow(<PageBox {...props} />);
        expect(wrapper.find("li").text()).toEqual(props.pageText.toString());
    });

    it('should set the selected class if the pageBox is selected', function () {
        const wrapper = shallow(<PageBox {...props} isSelected={true} />);
        expect(wrapper.find("li").hasClass("currentSelected")).toEqual(true);
    });

    it('should call goTo function when click the box', function () {
        const wrapper = shallow(<PageBox {...props} />);
        wrapper.find("li").simulate("click")
        expect(mockGotoFunction).toHaveBeenCalled();
    });



});