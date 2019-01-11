import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount, shallow } from "enzyme";
import PageBox from "../component/PageBox";
import Pagination from "../component/pagination";

Enzyme.configure({ adapter: new Adapter() });

describe('test pagination component ', () => {

    const mockHandlePageOnChange = jest.fn();
    const props = {
        handlePageOnChange: mockHandlePageOnChange,
    };

    it('should render a UL tag', function () {
        const wrapper = shallow(<Pagination {...props} />);
        expect(wrapper.find("ul").length).toBe(1);
    });

    it('should render the the < as the first li ', function () {
        const wrapper = shallow(<Pagination {...props} />);
        expect(wrapper.find("li").first().text()).toEqual("<");
    });

    it('should select 1 as the selected box', function () {
        const wrapper = mount(<Pagination {...props} />);
        expect(wrapper.find(".currentSelected").text()).toEqual("1");
    });

    it('should render the goto ', function () {
        const wrapper = shallow(<Pagination {...props} />);
        expect(wrapper.find('#goto').length).toBe(1)
    });

    it('should set the < as forbidden style', function () {
        const wrapper = shallow(<Pagination {...props} />);
        expect(wrapper.find("li").first().hasClass('forbiddenStyle')).toBe(true);
    });

    it('should call handlePageOnchange function when click items on the page', function () {
        const wrapper = shallow(<Pagination {...props} />);
        wrapper.find("li").at(2).simulate("click");
        expect(mockHandlePageOnChange).toHaveBeenCalled();
    });

    xit('should set the input value box as currentSelected', function () {
        const wrapper = mount(<Pagination {...props} />);
        const input = wrapper.find('input');
        input.simulate('keyDown',{keyCode:9});
        expect(wrapper.find(".currentSelected").text()).toEqual("9");
    });

});