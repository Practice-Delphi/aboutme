import React, { Component } from 'react';
import './Login.css';

// connect component to redux
import { connect } from 'react-redux';

//Import components

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorType: null,
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submit = this.submit.bind(this);
    }
    changeEmail(event) {
        this.setState({ email: event.target.value });
    }
    changePassword(event) {
        this.setState({ password: event.target.value });
    }
    submit() {
        alert(`Sorry it's not work now\nYou enter: \n Email: ${this.state.email} \n Password: ${this.state.password}`);
    }
    render() {
        return (
            <div className="Login">
                <div className="Login-container">
                    <div className="Login-title">
                        Log in
                    </div>
                    <form className="Login-form">
                        <input type="email" className="Login-input" placeholder="Email address" onChange={this.changeEmail} />
                        <input type="password" className="Login-input" placeholder="Password" onChange={this.changePassword} />
                        <div className="Login-alert">
                            Some alert
                    </div>
                        <div className="Login-form-submit">
                            <button type="button" onClick={this.submit}>Send</button>
                        </div>
                    </form>
                    <div className="Login-links">
                        <a href="/account/register">New account</a>
                        <a href="/account/forgotpassword">Forgot password</a>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);