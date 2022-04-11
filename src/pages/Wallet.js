import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Inputs from '../components/Inputs';
import Table from '../components/Table';
import { fetchCurrencie } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencieValue } = this.props;
    getCurrencieValue();
  }

  render() {
    return (
      <div>
        <Header />
        <Inputs />
        <Table />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getCurrencieValue: () => dispatch(fetchCurrencie()),
});

Wallet.propTypes = {
  getCurrencieValue: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Wallet);
