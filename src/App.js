import React, {Component} from "react";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Routes from "./components/routes/Routes";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class AddForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    add = () => {
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;
        this.props.add(name, price);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.nameRef}/><br/>
                <input type="text" ref={this.priceRef}/><br/>
                <button onClick={this.add}>Add</button>
            </div>)
    }
}

class Item extends React.Component {

    render() {
        return (
            <li> {this.props.name}, ${this.props.price}
            </li>);
    }
}

class App extends React.Component {
    // state = {
    //     items: [
    //         {id: 1, name: 'Apple', price: 100124124},
    //         {id: 2, name: 'Orange', price: 0.89},
    //     ]
    // };

    // add = (name, price) => {
    //
    //     let id = this.state.items.length + 1;
    //
    //     this.setState({
    //         items: [
    //             ...this.state.items,
    //             {id, name: `Item ${name}`, price: price}
    //         ]
    //     });
    // };

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar/>
                    <div className="container">
                        <Routes/>
                    </div>
                </Router>
            </React.Fragment>

        )
    }

    // render() {
    //     return (
    //         <div>
    //             <h1>Hello React</h1>
    //             <ul>
    //                 {this.state.items.map(i => {
    //                     return (
    //                         <Item
    //                             key={i.id}
    //                             name={i.name}
    //                             price={i.price}
    //                         />
    //                     )
    //                 })}
    //             </ul>
    //
    //             <AddForm add={this.add}/>
    //         </div>
    //     )
    // }
}

export default App;
