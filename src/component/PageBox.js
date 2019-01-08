import React, {Component} from "react";
import "../style/pageBox.css"

export default class PageBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {pageText } = this.props;

        return (
            <div>
            <li >{pageText}</li>
            </div>
        )
    }


}