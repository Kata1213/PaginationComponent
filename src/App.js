import React, {Component} from 'react';
import './App.css';
import Pagination from "./component/pagination";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div style={{height: "700px"}}/>
                <Pagination/>
            </div>
        );
    }
}

export default App;
