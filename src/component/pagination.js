import React, {Component} from "react";
import "../style/pagination.css"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
            total: 50,
            group: 5,
        }
    }

    createPaginationComponent() {
        const {current, total, group} = this.state;
        let pageList = [];

        if (total < 1) {
            return null;
        } else if (total === 1) {
            return (<li>1</li>)
        } else if (total < group) {
            pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"}> &lt; </li>)
            for (let i = 1; i <= total; i++) {
                pageList.push(<li>{i}</li>)
            }
        } else {
            pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"}> &lt; </li>)
            for (let i = 1; i <= group && i <= total; i++) {
                pageList.push(<li>{i}</li>)
                console.log(i);
            }

            if (total > group + 1) {
                pageList.push(<li id="ellipsis">...</li>)
            }
            pageList.push(<li>{total}</li>)
            pageList.push(<li className={current === total ? "forbiddenStyle" : "activeStyle"}> &gt; </li>)
            pageList.push(<li id="goto"> Goto </li>)
            pageList.push(<input className="input"/>)

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