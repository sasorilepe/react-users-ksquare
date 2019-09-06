import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import User from './User/User';
import Input from './Input/Input';
import Alert from './Alert/Alert';

class App extends Component {

  constructor() {
    super();
    this.createUser = this.createUser.bind(this);
  }

  state = {
    title: 'User List',
    users: [
      { id: 1, firstName: 'Juan', lastName: 'Doe' }
    ],
    alert: null
  };

  createUser(event) {
    event.preventDefault();
    console.log(event);
  }

  NewUser() {
    return (
      <form onSubmit={this.createUser} className="App__user-form">
        <Input label="First Name" placeholder="i.e John" name="firstName"></Input>
        <Input label="Last Name" placeholder="i.e Doe" name="lastName"></Input>
        <Input label="Age" placeholder="i.e 21" name="age"></Input>
        <Link to="/">
          <input type="submit" className="App__user-form__save" value="SAVE" />
        </Link>
      </form>
    );
  }

  UserList() {
    return (
      <div className="App__user-list">
        {this.state.users.map(user => {
          return <User key={user.id} name={user.firstName} lastname={user.lastName}></User>
        })}
        <Link to="/create">
          <div className="App__user-list__button">
            <div>+</div>
          </div>
        </Link>
      </div>
    );
  }

  render() {

    let alert = null;

    if (this.state.alert) {
      alert = <Alert>{this.state.alert}</Alert>;
    }

    return (
      <Router>
        <div className="App">
          <Header title={this.state.title}></Header>
          <Route exact path="/" component={() => this.UserList()} />
          <Route path="/create" component={() => this.NewUser()} />
          {alert}
        </div>
      </Router>
    );
  }
}

export default App;
