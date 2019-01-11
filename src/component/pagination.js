import React, {Component} from "react";
import "../style/pagination.css"
import PageBox from "./PageBox";

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            total: 40,
            group: 5,
        }
    }

    handlePageOnChange = (activePage) => {
        this.props.handlePageOnChange(activePage);
    }

    createPaginationComponent() {
        const {current, total, group} = this.state;

        if (total < 1) {
            return null;
        }

        let pageList = [];
        let startPage = 1;

        pageList.push(
            <li
                key={0}
                className={current === 1 ? "forbiddenStyle" : "activeStyle"}
                onClick={this.goPre}
            >
                &lt;
            </li>);

        pageList.push(
            <PageBox
                key={startPage}
                pageText={startPage}
                isSelected={current === startPage}
                goTo={this.goTo}
            />) && startPage++;

        let middlePanelStartPage = current - Math.floor(group / 2) > (startPage) ? current - Math.floor(group / 2) : (startPage);

        let middlePanelEndPage = current + Math.floor(group / 2) < total ? current + Math.floor(group / 2) : total;

        // middlePanelEndPage - middlePanelStartPage !== (group - 1) && middlePanelStartPage === (startPage) ? (middlePanelEndPage = group < total ? group : total) : (middlePanelStartPage = middlePanelEndPage - group + 1 > 0 ? middlePanelEndPage - group + 1 : (startPage));
        if (middlePanelEndPage - middlePanelStartPage !== (group - 1)) {
            if (middlePanelStartPage === (startPage)) {
                middlePanelEndPage = group < total ? group : total;
            } else {
                middlePanelStartPage = middlePanelEndPage - group + 1 > 0 ? middlePanelEndPage - group + 1 : (startPage)
            }
        }

        middlePanelStartPage - 1 > 1 && pageList.push(<li key={"first ellipsis"} id="ellipsis">...</li>);

        for (let i = middlePanelStartPage; i <= middlePanelEndPage && i < total; i++) {
            pageList.push(
                <PageBox
                    key={i}
                    isSelected={current === i}
                    pageText={i}
                    goTo={this.goTo}
                />)
        }

        middlePanelEndPage < total - 1 && pageList.push(<li key={"last ellipsis"} id="ellipsis">...</li>);

        pageList.push(
            <PageBox
                key={total}
                isSelected={current === total}
                pageText={total}
                goTo={this.goTo}
            />);

        pageList.push(
            <li
                className={current === total ? "forbiddenStyle" : "activeStyle"}
                onClick={this.goNext}
                key={total + 1}
            >
                &gt;
            </li>);


        pageList.push(<li id="goto" key={total + 2}> Goto </li>);
        pageList.push(<input key="input1" className="input" onKeyUp={this.getPageValue.bind(this)}/>)
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
                this.goTo(Number(pageValue))
            }
        }
    }

    goTo = (currentId) => {
        if (currentId > 0 && currentId <= this.state.total) {
            this.setState({current: currentId})
            this.handlePageOnChange(currentId);
        }
    }

    goPre = () => {
        let {current} = this.state;
        this.goTo(--current);
    }

    goNext = () => {
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