import React, {Component} from "react";
import "../style/pagination.css"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 50,
            group:5,
        }
    }

    createPaginationComponent() {
        const {current, total,group} = this.state;
        let pageList = [];

        pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"}> &lt; </li>)

        pageList.push(<li>{current}</li>)
        pageList.push(<li id="ellipsis">...</li>)
        for(let i =current+3 ; i<current+3+group;i++){
            pageList.push(<li>{i}</li>)
        }
        pageList.push(<li id="ellipsis">...</li>)
        pageList.push(<li>{total}</li>)

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