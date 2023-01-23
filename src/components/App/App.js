import BotCollection from '../Bots/BotCollection';
import './App.css';
import { useState, useEffect } from 'react';
import YourBotArmy from '../Bots/YourBotArmy';

const BOT_URL = "https://jacobmuchori.github.io/JacobMuchori.bot.io/db.json"

function App() {

  const [allbots, setAllBots] = useState([])
  const [yourBot, setYourBot] = useState([])

  useEffect(() => {
      fetch(BOT_URL)
      .then((response) => response.json())
      .then((data) => {
          setAllBots(data.bots)
      })
  }, [])

  function addBot(bot) {
  
    if(!yourBot.find(bots => bots.id === bot.id)) {
    setYourBot([...yourBot, bot])
    }
  }

  function deleteBot(bot) {
    const newBot = yourBot.filter(b => b.id !== bot.id)
    setYourBot(newBot)
    
  }

  return (
    <div className="App">
      <div className='top'>
        <YourBotArmy props={yourBot} deleteBot={deleteBot}/>
      </div>
      <div className='bottom'>
        <BotCollection props={allbots} addBot={addBot} />
      </div>
    </div>
  );
}

export default App;
