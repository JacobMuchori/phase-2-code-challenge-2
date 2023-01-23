import React from "react";

function YourBotArmy({ props, retireBot, handleClick }) {

    function handleRetire(bot) {
        retireBot(bot)
    }
    return (
        <div className="cards">
             {props.map((bot) => 
                    <div className="card" key={'yourbot'+bot.id} onClick={() => handleRetire(bot)}>
                    <img className="card-img-top"  src={bot.avatar_url} alt="..."/>
                    <h2 className="card-title fs-4">{bot.name}</h2>
                    <h3 className="card-subtitle mb-2 text-muted fs-5">{bot.catchphrase}</h3>
                    <h4> Health: {bot.health}</h4>
                    <h4>Damage: {bot.damage}</h4>
                    <h4>Armor: {bot.armor} </h4>
                    <button onClick={() => handleClick(bot)}>X</button>
                </div>
            )
            } 
        </div>
    )

}

export default YourBotArmy;