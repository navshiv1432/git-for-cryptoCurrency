import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <li className="list-item-types">
      <div className="logo-name">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="'name">{currencyName}</p>
      </div>
      <div className="type-cont">
        <p className="'name">{usdValue}</p>
        <p className="'name">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
