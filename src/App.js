import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Clicks, SetClicks] = useState(0);
  const [ClicksMultipler, SetClicksMultiplier] = useState(1);
  const [ClicksMultiplerPrice, SetClicksMultiplierPrice] = useState(25);
  const [showUpgrades, setShowUpgrades] = useState(false); 

  function UpdateClicks() {
    SetClicks(Clicks + ClicksMultipler);
  }

  function ShowUpgrades() {
    setShowUpgrades(!showUpgrades); 
  }

  function handlePurchase() {
    if (Clicks >= ClicksMultiplerPrice) {
      SetClicks(Clicks - ClicksMultiplerPrice);
      SetClicksMultiplier(ClicksMultipler + 1);
      SetClicksMultiplierPrice(ClicksMultiplerPrice * 2);
    }
  }

  return (
    <div>
      <h1 className='Clicks'>Clicks: {Clicks}</h1>
      <div className='Clicks-Container'>
        <button onClick={UpdateClicks} className='Button-Clicker'>Click</button>
        <button className='Button-Default' onClick={ShowUpgrades}>Upgrades</button>
      </div>

      {showUpgrades && (
        <div className='Upgrades-Div'>
          <h2>Upgrades:</h2>
          <ul>
            <li>1+ Per Click <button className='Button-Default' onClick={handlePurchase}>Purchase {ClicksMultiplerPrice}</button></li>
          </ul>
        </div>
      )}
      
    </div>
  );
}

export default App;
