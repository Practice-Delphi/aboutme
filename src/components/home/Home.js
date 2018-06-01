import React, { Component } from 'react';
import './Home.css';

// connect component to redux
import { connect } from 'react-redux';

//Import components
import Firsthome from '../firsthome/Firsthome';

class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
     <Firsthome />
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