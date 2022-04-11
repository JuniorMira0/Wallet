import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setGlobalExpanses } from '../actions';
import fetchAll from '../services/currenciAPI';

class Inputs extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      coin: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  onChange = (event) => {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value,
    });
  }

  onClick = async (e) => {
    const { expensesArray } = this.props;
    const { id, value, description, coin, method, tag } = this.state;
    e.preventDefault();
    const rates = await fetchAll();
    expensesArray({
      id,
      value,
      description,
      coin,
      method,
      tag,
      exchangeRates: rates,
    });
    this.setState({
      id: id + 1,
    });
  }

  render() {
    const { value, description, coin, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <form
        onSubmit={ this.onClick }
        className="navbar navbar-expand-lg navbar-light bg-light shadow"
      >
        <label htmlFor="valor">
          Valor:
          <input
            data-testid="value-input"
            type="text"
            name="value"
            id="value"
            value={ value }
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select
            name="coin"
            id="coin"
            data-testid="currency-input"
            value={ coin }
            onChange={ this.onChange }
          >
            {currencies.map((moeda, index) => (
              <option key={ index }>{ moeda }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.onChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.onChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Lazer">Lazer</option>
            <option value="Saúde">Saúde</option>
            <option value="Transporte">Transporte</option>
          </select>
        </label>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  expensesArray: (form) => dispatch(setGlobalExpanses(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);

Inputs.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expensesArray: PropTypes.func.isRequired,
};
