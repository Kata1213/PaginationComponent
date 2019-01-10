import React, {Component} from "react";
import "../style/pageBox.css"

export default class PageBox extends Component {
    constructor(props) {
        super(props)
    }

    goTo = (pageText) => {
        this.props.goTo(pageText);
    };

    render() {
        let {pageText, isSelected, isForbidden} = this.props;

        return (
            <li
                className={isSelected ? "currentSelected" : isForbidden ? "forbiddenStyle" : ""}
                onClick={this.goTo.bind(this, pageText)}
            >
                {pageText}
            </li>
        )
    }
}