import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Routing tools
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

// connect component to redux
import { connect } from 'react-redux';
import { runTestAction } from '../actions/testaction';

class App extends Component {
  componentDidMount() {
    this.props.runTest("TestPassed");
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">About Me</h1>
          </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route exact={true} path={'/'} render={()=>(<h1>This is Home Page</h1>)}/>
        <Route exact={true} path={'/profile'} render={()=>(<h1>This is Profile Page</h1>)}/>
        <Route exact={true} path={'/profile/:id'} render={({ match })=>(<h1>This is Profile Page of { match.params.id} </h1>)}/>
        <Route exact={true} path={'/photos'} render={()=>(<h1>This is Photos Page</h1>)}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  test: state.isTestPass
});
const mapDispatchToProps = dispatch => ({
  runTest: (mess) => { dispatch(runTestAction(mess)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
