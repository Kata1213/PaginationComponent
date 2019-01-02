import React, {Component} from "react";
import "../style/pagination.css"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 5,
            total: 40,
            group: 5,
        }
    }

    createPaginationComponent() {
        const {current, total, group} = this.state;
        let pageList = [];

        if (total < 1) {
            return null;
        } else if (total === 1) {
            pageList.push(<li>1</li>)
        } else if (total <= group) {
            pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"}> &lt; </li>)
            for (let i = 1; i <= total; i++) {
                pageList.push(<li>{i}</li>)
            }

        } else {
            pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"}> &lt; </li>)
            if (current !== 1) {
                pageList.push(<li>1</li>)
                pageList.push(<li id="ellipsis">...</li>)
            }
            let i = current;
            for (; i < group+current && i <= total; i++) {
                pageList.push(<li onClick={this.goTo.bind(this,i)}>{i}</li>)
                console.log(i);
            }

            if (total > group + 1) {
                pageList.push(<li id="ellipsis">...</li>)
            }
            pageList.push(<li>{total}</li>)

        }
        pageList.push(<li className={current === total ? "forbiddenStyle" : "activeStyle"}> &gt; </li>)
        pageList.push(<li id="goto"> Goto </li>)
        pageList.push(<input className="input"/>)

        return pageList;
    }

    goTo(currentId){
        this.setState({current:currentId})
    }

    render() {
        return (
            <ul className="main">
                {this.createPaginationComponent()}
            </ul>

        );
    }
}