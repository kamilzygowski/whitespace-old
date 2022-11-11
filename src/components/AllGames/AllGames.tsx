import React from 'react'
import Game from '../Game/Game'
import './AllGames.scss'

const AllGames = () => {
  return (
    <div className='AllGames'>
        <Game header="Salve Devito" gameType="MMORPG" isSteam/>
        <Game header="Rythm Game" gameType="RYTHMICAL" isPlaystation isXbox/>
        <Game header="Mouse Sabre" gameType="DEXTERITY GAME" isApple isGoogleplay/>
    </div>
  )
}

export default AllGames