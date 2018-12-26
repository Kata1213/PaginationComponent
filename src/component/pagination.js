import React, {Component} from "react";
import "../style/pagination.css"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 5,
        }
    }

    createPaginationComponent() {
        const {current, total} = this.state;
        let pageList = [];

        pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"}> &lt; </li>)

        for (let i = 1; i <= total; i++) {
            pageList.push(<li>{i}</li>)
        }

        return pageList;
    }

    render() {
        return (
            <ul className="main">
                {this.createPaginationComponent()}
            </ul>

        );
    }
}