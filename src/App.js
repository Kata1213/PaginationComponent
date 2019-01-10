import React, {Component} from 'react';
import './App.css';
import Pagination from "./component/pagination";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activePage: 1
        }
    }

    handlePageOnChange = (activePage) =>{
        console.log("activePage= "+ activePage);
        this.setState({activePage:activePage})
    }


    render() {
        return (
            <div className="App">
                <div className="content"><p>Now, we are on the Page {this.state.activePage}</p></div>
                <Pagination handlePageOnChange={this.handlePageOnChange}/>
            </div>
        );
    }
}

export default App;
