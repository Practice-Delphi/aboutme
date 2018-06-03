import React, { Component } from 'react';
import './Account.css';

// connect component to redux
import { connect } from 'react-redux';

import { Route, Link } from 'react-router-dom';
import logo from '../logo.jpg';

//Import components
import Register from '../register/Register';
import Langselect from '../langselect/Langselect';
import Profile from '../profile/Profile';


class Account extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <header className="Home-header">
          <nav className="Home-navbar">
            <div className="Home-brand">
              <img src={logo} className="Home-logo" alt="logo" />
              <h1 className="Home-title">Site Title</h1>
            </div>
            <Langselect />
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Log in</Link>
            <Link className='btn btn-outline-light Home-link' to={'/account/register'}>Sign in</Link>
          </nav>
        </header>
        <Route exact={true} path={"/account"} component={Profile}/>
        <Route exact={true} path={"/account/register"} component={Register}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // some props
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);