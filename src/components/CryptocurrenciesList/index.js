// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrencyHeader = () => (
    <div className="list-header">
      <p className="type">Coin Type</p>
      <div className="list">
        <p className="type">USD</p>
        <p className="type">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrencyView = () => {
    const {cryptoCurrencyData} = this.props
    return (
      <div className="crypto-currency-header" data-testid="loader">
        {this.renderCryptoCurrencyHeader()}
        <ul className="list-items">
          {cryptoCurrencyData.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              currencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="main-cont" data-testid="loader">
        <h1 className="head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="age"
          alt="cryptocurrency"
        />
        {this.renderCryptoCurrencyView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
