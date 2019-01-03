import React, {Component} from "react";
import "../style/pagination.css"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 3,
            total: 40,
            group: 5,
        }
    }

    createPaginationComponent() {
        const {current, total, group} = this.state;
        let startPage = current - 2;
        let endPage = startPage + group
        let pageList = [];

        if (total < 1) {
            return null;
        }

        pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"}
                          onClick={this.goPre.bind(this)}> &lt; </li>)

        pageList.push(<li className={current == 1 ? "currentSelected" : ""}
                          onClick={this.goTo.bind(this, 1)}>1</li>)

        if (startPage > 2) {
            pageList.push(<li id="ellipsis">...</li>)
            for (let j = startPage; j < endPage && j < total; j++) {
                pageList.push(<li className={current == j ? "currentSelected" : ""}
                                  onClick={this.goTo.bind(this, j)}>{j}</li>)
            }
        } else {
            for (let i = 2; i <= group && i < total; i++) {
                pageList.push(<li className={current == i ? "currentSelected" : ""}
                                  onClick={this.goTo.bind(this, i)}>{i}</li>)
            }
        }

        if (endPage < total) {
            pageList.push(<li id="ellipsis">...</li>)
        }

        pageList.push(<li onClick={this.goTo.bind(this, total)}
                          className={current == total ? "currentSelected" : ""}>{total}</li>)
        pageList.push(<li className={current == total ? "forbiddenStyle" : "activeStyle"}
                          onClick={this.goNext.bind(this)}> &gt; </li>)
        pageList.push(<li id="goto"> Goto </li>)
        pageList.push(<input className="input" onKeyUp={this.getPageValue.bind(this)}/>)
        return pageList;
    }

    getPageValue(e) {
        if (e.keyCode === 13) {
            let pageValue = e.target.value;
            if (pageValue !== " " && !isNaN(pageValue)) {
                if (pageValue < 1) {
                    pageValue = 1
                }
                if (pageValue > this.state.total) {
                    pageValue = this.state.total
                }
                this.setState({current: pageValue})
            }
        }
    }

    goTo(currentId) {
        if (currentId > 0 && currentId <= this.state.total) {
            this.setState({current: currentId})
        }
    }

    goPre() {
        let {current} = this.state;
        this.goTo(--current);
    }

    goNext() {
        let {current} = this.state;
        this.goTo(++current);
    }


    render() {
        return (
            <ul className="main">
                {this.createPaginationComponent()}
            </ul>
        );
    }
}