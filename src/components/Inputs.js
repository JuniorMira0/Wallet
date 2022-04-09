import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <section className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <label htmlFor="valor">
          Valor:
          <input
            data-testid="value-input"
            type="text"
            id="valor"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select
            id="coin"
            data-testid="currency-input"
            name="coin"
          >
            {currencies.map((coin, index) => (
              <option key={ index } value={ coin }>{ coin }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            data-testid="method-input"
            name="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            id="tag"
            data-testid="tag-input"
            name="tag"
          >
            <option>Alimentação</option>
            <option>Trabalho</option>
            <option>Lazer</option>
            <option>Saúde</option>
            <option>Transporte</option>
          </select>
        </label>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Inputs);

Inputs.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
