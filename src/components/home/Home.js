import React, { Component } from 'react';
import './Home.css';

// connect component to redux
import { connect } from 'react-redux';

//Import components
import Firsthome from '../firsthome/Firsthome';
import Ourpages from '../ourpages/Ourpages';
import Quote from '../quote/Quote';

class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
     <Firsthome />
     <Ourpages />
     <Quote />
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