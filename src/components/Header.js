import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const currencyField = expenses.reduce((acc, expense) => (
      acc + Number(expense.value * expense.exchangeRates[expense.currency].ask)), 0);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
        <div className="container">
          <span className="navbar-brand">Wallet</span>
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
              <span className="nav-link" data-testid="total-field">
                { currencyField.toFixed(2) }
              </span>
            </li>
            <li className="nav-item active">
              <span className="nav-link" data-testid="header-currency-field">
                BRL
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
