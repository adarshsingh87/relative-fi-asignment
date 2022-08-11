// packages/component imports
import React from 'react'
import CurrencyCard from './components/currency-card/CurrencyCard'

// img imports
import TrendingSVG from './assets/activity.svg'
import BitcoinLogo from './assets/Bitcoin.svg'
import SolanaLogo from './assets/Solana.svg'
import EtheriumLogo from './assets/Ethereum.svg'
import BinanceCoinLogo from './assets/Binance-Coin.svg'
import ShibaInuLogo from './assets/SHIBA-INU.svg'

//css import
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='trending'>
        <img src={TrendingSVG} alt='activity graph' className='trending__img' />
        <h1 className='trending__heading primary-text'>Trending Assets</h1>
      </div>
      <div className='trending-cards__container'>
        <CurrencyCard
          currencyChange='+10%'
          currencyImg={BitcoinLogo}
          currencyName='Bitcoin (BTC)'
          currencyPrice='31,812.80'
          currencyTVL='60,000'
          popularPairs={[SolanaLogo, EtheriumLogo, BinanceCoinLogo]}
          shortName='BTC'
        />
        <CurrencyCard
          currencyChange='-12.32%'
          currencyImg={SolanaLogo}
          currencyName='Solana (SOL)'
          currencyPrice='32.83'
          currencyTVL='60,000'
          popularPairs={[BitcoinLogo, EtheriumLogo, BinanceCoinLogo]}
          shortName='SOL'
        />
        <CurrencyCard
          currencyChange='-11.93%'
          currencyImg={EtheriumLogo}
          currencyName='Ethereum (ETH)'
          currencyPrice='1,466.45'
          currencyTVL='60,000'
          popularPairs={[SolanaLogo, BitcoinLogo, BinanceCoinLogo]}
          shortName='ETH'
        />
        <CurrencyCard
          currencyChange='+0.26%'
          currencyImg={BinanceCoinLogo}
          currencyName='Binance USD (BUSD)'
          currencyPrice='1.00'
          currencyTVL='60,000'
          popularPairs={[SolanaLogo, EtheriumLogo, BinanceCoinLogo]}
          shortName='BUSD'
        />
        <CurrencyCard
          currencyChange='-8.1%'
          currencyImg={ShibaInuLogo}
          currencyName='Shiba Inu (SHIB)'
          currencyPrice='0.00000001948'
          currencyTVL='60,000'
          popularPairs={[SolanaLogo, EtheriumLogo, BinanceCoinLogo]}
          shortName='SHIB'
        />
      </div>
    </div>
  )
}

export default App
