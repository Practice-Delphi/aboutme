import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.jpg';
import './App.css';

// import Routing tools
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// connect component to redux
import { connect } from 'react-redux';
import { runTestAction } from '../actions/testaction';

//imports components 
import Home from './home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langselect: false
    }
  }
  componentDidMount() {
    this.props.runTest("TestPassed");
  }
  changeLangSelect() {
    if (this.state.langselect) {
      this.setState({ langselect: false });
    } else {
      this.setState({ langselect: true });
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav className="App-navbar">
              <div className="App-brand">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Site Title</h1>
              </div>
              <Link className='btn btn-outline-light App-link' to={'/registration'}>Link1</Link>
              <Link className='btn btn-outline-light App-link' to={'/registration'}>Link2</Link>
              <Link className='btn btn-outline-light App-link' to={'/registration'}>Link3</Link>
              <Link className='btn btn-outline-light App-link' to={'/registration'}>Link4</Link>
              <Link className='btn btn-outline-light App-link' to={'/registration'}>Link5</Link>
              <div className='btn btn-outline-light App-lang-select-button' onClick={this.changeLangSelect.bind(this)}>Lang
                {((select) => {
                  if (select) {
                    return (
                      <div className="App-lang-select" >
                        <div className="App-lang-option">
                          Lang 1
                        </div>
                        <div className="App-lang-option">
                          Lang 2
                        </div>
                        <div className="App-lang-option">
                          Lang 3
                        </div>
                      </div>
                    )
                  } else {
                    return null;
                  }
                })(this.state.langselect)}
              </div>
              <Link className='btn btn-outline-light App-link' to={'/registration'}>Log in</Link>
              <Link className='btn btn-outline-light App-link' to={'/registration'}>Sign in</Link>
            </nav>
          </header>
          <Route exact={true} path={'/'} component={Home} />
          <Route exact={true} path={'/profile'} render={() => (<h1>This is Profile Page</h1>)} />
          <Route exact={true} path={'/profile/:id'} render={({ match }) => (<h1>This is Profile Page of {match.params.id} </h1>)} />
          <Route exact={true} path={'/photos'} render={() => (<h1>This is Photos Page</h1>)} />
          <Route exact={true} path={'/registration'} render={() => (<h1>This is registration page</h1>)} />
          <Route exact={true} path={'/login'} render={() => (<h1>This is login page</h1>)} />
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

App.propTypes = {
  runTest: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
