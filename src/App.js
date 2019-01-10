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
        this.setState({activePage:activePage})
    }


    render() {
        return (
            <div className="App">
                <div className="content">
                    <div><p>Now, we are on the </p></div>
                    <div>Page {this.state.activePage}</div>
                    </div>
                <Pagination handlePageOnChange={this.handlePageOnChange}/>
            </div>
        );
    }
}

export default App;
