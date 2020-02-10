import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'


class SignUp extends Component {
    state = {
        email:"",
        password:"",
        firstName:"",
        lastName:""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { authError, auth} = this.props;
        if(auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit} autoComplete="Off">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Signup</button>
                        <div className="red-text center">
                            <p>{authError ? <p> {authError}</p>: null}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)