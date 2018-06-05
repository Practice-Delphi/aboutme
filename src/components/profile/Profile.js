import React, { Component } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
// connect component to redux
import { connect } from 'react-redux';

//Import components

class Profile extends Component {
  constructor(props) {
    super(props);
    if (!this.props.userData.user) {
      this.props.history.push('/account/login');
    }
    this.state = {
      isPatherLinkActive: false,
      isControlPanel: true,
      isSettings: false,
    }
    this.renderPatherLink = this.renderPatherLink.bind(this);
    this.changePatherState = this.changePatherState.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.renderControlPanel = this.renderControlPanel.bind(this);
    this.renderSettings = this.renderSettings.bind(this);
    this.changeToControlPanel = this.changeToControlPanel.bind(this);
    this.changeToSettings = this.changeToSettings.bind(this);
  }
  changePatherState() {
    if (!this.state.isPatherLinkActive) {
      this.setState({ isPatherLinkActive: true });
    }
  }
  changeToControlPanel() {
    this.setState({isControlPanel: true, isSettings: false});
  }
  changeToSettings() {
    this.setState({isControlPanel: false, isSettings: true});
  }
  renderPatherLink() {
    if (!this.state.isPatherLinkActive) {
      return (<div className="Profile-pather-link">
        <button className="Profile-button" onClick={this.changePatherState}>Pather link</button>
      </div>);
    } else {
      return (<div className="Profile-pather-link">
        <div>{this.props.userData.user.url}</div>
      </div>);
    }
  }
  renderMain() {
    if (this.state.isControlPanel) {
      return this.renderControlPanel();
    } else if (this.state.isSettings) {
      return this.renderSettings();
    }
  }
  renderControlPanel() {
    return (
      <div className="Profile-main">
      <div className="Profile-container">
        <div className="Profile-title">Main 1</div>
        <div className="Profile-tokens">
          <div className="Profile-tokens-field">
            <p>{this.props.userData.user.tokens}</p><p> GGC</p>
          </div>
          <div className="Profile-text">Text 1</div>
        </div>
        <div className="Profile-address">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXj2g0wORU9otjUkPh1ywjb_F-HYwNZQyHANGbXhrwWMoABaVA" alt="" />
          <span> Address ETH</span>
          <button className="Profile-button" onClick={this.changeToSettings}>Settings:</button>
        </div>
      </div>
      <div className="Profile-container pather">
        <div className="Profile-pather-left">
          <div className="Profile-title">Main 2</div>
        </div>
        <div className="Profile-pather-right">
          <div className="Profile-text">Text 2</div>
          {this.renderPatherLink()}
          <table className="Profile-pather-table">
            <tbody>
              <tr>
                <td>Registration</td>
                <td>Commission</td>
              </tr>
              <tr>
                <td><b>{this.props.userData.user.registers}</b></td>
                <td><b>{this.props.userData.user.commission}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
  renderSettings() {
    return (<div className="Profile-main">Settings</div>)
  }
  render() {
    if (this.props.userData.user) {
      return (
        <div className="Profile">
          <div className="Profile-header">
            <div className="Profile-header-container">
              <div className="Profile-header-nav">
                <div className={(this.state.isControlPanel) ? "Profile-nav-button active" : "Profile-nav-button"} onClick={this.changeToControlPanel}>
                  Control Panel
                </div>
                <div className={(this.state.isSettings) ? "Profile-nav-button active" : "Profile-nav-button"} onClick={this.changeToSettings}>
                  Settings
                </div>
              </div>
              <div className="Profile-header-nav">
                <div className="Profile-nav-email">
                  <span>Welcome <i>{this.props.userData.user.email}</i></span>
                </div>
                <div className="Profile-nav-exitbutton">
                  Log out
                </div>
              </div>
            </div>
          </div>
            { this.renderMain() }
        </div>
      );
    } else {
      return null;
    }

  }
}

Profile.propTypes = {
  userData: PropTypes.object,
  history: PropTypes.object
}

const mapStateToProps = state => ({
  // some props
  userData: state.userData,
  history: state.historyData
});
const mapDispatchToProps = dispatch => ({
  // some action creators
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);