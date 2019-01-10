import React, {Component} from "react";
import "../style/pageBox.css"

export default class PageBox extends Component {
    constructor(props) {
        super(props)

    }

    // handleGotoPre=()=>{
    //     console.log("handleGotoPre !!!!!!!!!!!!!!!!1")
    //     this.props.goPre();
    // }
    // goPre = () =>{
    //         console.log("handleGotoPre !!!!!!!!!!!!!!!!1")
    //         this.props.goPre();
    // }

    goTo =(pageText) => {
        console.log("aaaaaa  goto   aaa ")
        this.props.goTo(pageText);
    }

    render() {
        let {pageText, isSelected, isForbidden } = this.props;

        return (
            <li
                className={isSelected? "currentSelected": isForbidden? "forbiddenStyle": ""}
                onClick={this.goTo.bind(this, pageText)}
            >{pageText}</li>
        )
    }


}