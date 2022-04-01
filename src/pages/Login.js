import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setEmailValue } from '../actions';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      validate: true,
    };
  }

  onChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateInput);
  };

  validateInput = () => {
    const { email, password } = this.state;
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const minLength = 6;
    const validateEmail = email.match(emailFormat);
    const validatePass = password.length >= minLength;
    this.setState({
      validate: !(validateEmail && validatePass),
    });
  }

  renderLogin = () => {
    const { dispatchSetEmail } = this.props;
    const { validate, email, password } = this.state;
    return (
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              value={ email }
              type="email"
              name="email"
              placeholder="Email"
              data-testid="email-input"
              onChange={ this.onChange }
            />
          </div>
          <div className="user-box">
            <input
              placeholder="Password"
              value={ password }
              type="password"
              name="password"
              required=""
              data-testid="password-input"
              onChange={ this.onChange }
            />
          </div>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ validate }
              onClick={ () => dispatchSetEmail(email) }
            >
              <span />
              <span />
              <span />
              <span />
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }

  render() {
    return (
      this.renderLogin()
    );
  }
}

Login.propTypes = {
  dispatchSetEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetEmail: (email) => dispatch(setEmailValue(email)),
});

export default connect(null, mapDispatchToProps)(Login);
