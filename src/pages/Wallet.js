import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrencie } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencieValue } = this.props;
    getCurrencieValue();
  }

  render() {
    const { expenses } = this.props;

    return (
      <div>
        <Header />
        {`Despesas: ${expenses}`}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getCurrencieValue: () => dispatch(fetchCurrencie()),
});

Wallet.propTypes = {
  expenses: PropTypes.string.isRequired,
  getCurrencieValue: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Wallet);
