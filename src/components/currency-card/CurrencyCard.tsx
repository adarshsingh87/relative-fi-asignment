// packages/component imports
import React from 'react'

// img imports

//css import
import './CurrencyCard.css'

// interface declarations
interface currencyCardProps {
  currencyImg: string
  currencyName: string
  currencyPrice: string
  currencyChange: string
  currencyTVL: string
  popularPairs: string[]
  shortName: string
}

const CurrencyCard = (props: currencyCardProps) => {
  return (
    <div className='currency-card'>
      <div className={`currency-card__logo-container ${props.shortName}`}>
        <img src={props.currencyImg} alt={props.currencyName} className='currency-card__logo' />
      </div>
      <div className='currency-details__container'>
        <h2 className='currency-details__heading secondary-text'>{props.currencyName}</h2>
        <div className='currency-details__price-container primary-text'>
          ${props.currencyPrice}
          <div className={`currencyChange ${props.currencyChange[0] === '+' ? 'green' : 'red'}`}>
            {props.currencyChange}
          </div>
        </div>
        <div className='tertiary-text'>Price</div>
        <div className='currency-details__price-container primary-text'>${props.currencyTVL}</div>
        <div className='tertiary-text'>TVL</div>
        <div className='popular-pairs__container'>
          {props.popularPairs.map((pair, index) => {
            return <img src={pair} key={index} className='popular-pairs__img' />
          })}
        </div>
        <div className='tertiary-text'>Popular Pairs</div>
      </div>
    </div>
  )
}

export default CurrencyCard
