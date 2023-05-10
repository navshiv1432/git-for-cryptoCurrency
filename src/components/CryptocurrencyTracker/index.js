// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.renderToGetCurrency()
  }

  renderToGetCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      userName: eachItem.user_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currencyLogo,
    }))
    this.setState({cryptoCurrencyData: updatedData, isLoading: false})
  }

  renderCryptoCurrencyList = () => {
    const {cryptoCurrencyData} = this.state
    return <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
  }

  renderLoader = () => {
    ;<div>
      <Loader type="ring" color="blue" height={80} width={80} />
    </div>
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="crypto-cont" data-testid="loader">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrencyList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
