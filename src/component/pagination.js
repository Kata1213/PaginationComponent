import React, {Component} from "react";
import "../style/pagination.css"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 5,
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

        pageList.push(<li className={current === total ? "forbiddenStyle" : "activeStyle"}> &gt; </li>)

        pageList.push(<li id="goto"> Goto </li>)

        pageList.push(<input className="input"/>)

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