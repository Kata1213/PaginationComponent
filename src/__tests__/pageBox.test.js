import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
import PageBox from "../component/PageBox";

Enzyme.configure({ adapter: new Adapter() });

describe('test pageBox component ', () => {

    const props = {
        goTo: () => {},
        pageText: 1,
        isSelected : true,
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
        const wrapper = shallow(<PageBox {...props} />);
        expect(wrapper.find("li").hasClass("currentSelected")).toEqual(true);
    });

});