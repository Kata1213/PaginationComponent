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
        const {total} = this.state;
        let pageList = [];
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