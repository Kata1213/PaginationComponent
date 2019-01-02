import React, {Component} from "react";
import "../style/pagination.css"

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 35,
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
            pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"} onClick={this.goPre()} > &lt; </li>)
            for (let i = 1; i <= total; i++) {
                pageList.push(<li>{i}</li>)
            }

        } else {
            pageList.push(<li className={current === 1 ? "forbiddenStyle" : "activeStyle"} onClick={this.goPre.bind(this)} > &lt; </li>)
            if (current !== 1) {
                pageList.push(<li>1</li>)
                pageList.push(<li id="ellipsis">...</li>)
            }
            let i = current;
            for (; i < group+current && i <= total; i++) {
                pageList.push(<li onClick={this.goTo.bind(this,i)} className={current===i?"currentSelected":""}>{i}</li>)
                console.log(i);
            }

            if (total > group + 1) {
                pageList.push(<li id="ellipsis">...</li>)
            }
            pageList.push(<li>{total}</li>)

        }
        pageList.push(<li className={current === total ? "forbiddenStyle" : "activeStyle"} onClick={this.goNext.bind(this)}> &gt; </li>)
        pageList.push(<li id="goto"> Goto </li>)
        pageList.push(<input className="input"/>)

        return pageList;
    }

    goTo(currentId) {
        if (currentId > 0 && currentId<= this.state.total) {
            this.setState({current: currentId})
        }
    }

    goPre() {
        let {current} = this.state;
        this.goTo(--current);
    }

    goNext(){
        let {current} = this.state;
        this.goTo(++current);
    }


    render() {
        const {current} =this.state;
        return (
            <ul className="main">
                {this.createPaginationComponent()}
                {console.log("current= " + current)}
            </ul>

        );
    }
}