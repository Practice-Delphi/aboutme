import React, { Component } from 'react';
import './Profile.css';

// connect component to redux
import { connect } from 'react-redux';

//Import components



class Profile extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
          This is account profile
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);