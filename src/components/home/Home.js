import React, { Component } from 'react';
import './Home.css';

// connect component to redux
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
import Langselect from '../langselect/Langselect';

//Import components
import Firsthome from '../firsthome/Firsthome';
import Ourpages from '../ourpages/Ourpages';
import Quote from '../quote/Quote';
import Benefits from '../benefits/Benefits';

class Home extends Component {
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
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link1</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link2</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link3</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link4</Link>
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Link5</Link>
            <Langselect />
            <Link className='btn btn-outline-light Home-link' to={'/registration'}>Log in</Link>
            <Link className='btn btn-outline-light Home-link' to={'/account/register'}>Sign in</Link>
          </nav>
        </header>
        <Firsthome />
        <Ourpages />
        <Quote />
        <Benefits />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);