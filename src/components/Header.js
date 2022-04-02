import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <span className="navbar-brand">Trybe Wallet</span>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <span className="nav-link" data-testid="email-field">
                {' '}
                Login:
                {' '}
                {email}
              </span>
            </li>
            <li className="nav-item active">
              <span className="nav-link" data-testid="total-field">0</span>
            </li>
            <li className="nav-item active">
              <span className="nav-link" data-testid="header-currency-field">BRL</span>
            </li>
          </ul>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
