import React from "react";

function YourBotArmy({ props, deleteBot }) {

    function handleDelete(bot) {
        deleteBot(bot)
    }
    return (
        <div className="cards">
             {props.map((bot) => 
                    <div className="card" key={'yourbot'+bot.id} onClick={() => handleDelete(bot)}>
                    <img className="card-img-top"  src={bot.avatar_url} alt="..."/>
                    <h2 className="card-title fs-4">{bot.name}</h2>
                    <h3 className="card-subtitle mb-2 text-muted fs-5">{bot.catchphrase}</h3>
                    <h4> Health: {bot.health}</h4>
                    <h4>Damage: {bot.damage}</h4>
                    <h4>Armor: {bot.armor} </h4>
                    <button>X</button>
                </div>
            )
            } 
        </div>
    )

}

export default YourBotArmy;