import React from 'react'
import './Game.scss'
import xbox from "../../assets/xbox.svg"
import playstation from "../../assets/playstation.svg"
import steam from "../../assets/steam.svg"
import apple from "../../assets/apple.svg"
import googleplay from "../../assets/googleplay.svg"

interface GameType {
    header: string;
    gameType: string;
    isXbox?: boolean;
    isApple?: boolean;
    isPlaystation?: boolean;
    isSteam?: boolean;
    isGoogleplay?: boolean;
}
const Game = ({ header, gameType, isXbox, isApple, isPlaystation, isSteam, isGoogleplay }: GameType) => {
    return (
        <div className='Game'>
            <div className='gameImage'>

            </div>
            <div className='gameDescription'>
                <h1>{header}</h1>
                <p>{gameType}</p>
                <div className='platforms'>
                    {isXbox ? <img src={xbox} className="platformIcon" alt="Xbox" /> : null}
                    {isApple ? <img src={apple} className="platformIcon" alt="App Store" /> : null}
                    {isPlaystation ? <img src={playstation} className="platformIcon" alt="Play Station" /> : null}
                    {isSteam ? <img src={steam} className="platformIcon" alt="Steam" /> : null}
                    {isGoogleplay ? <img src={googleplay} className="platformIcon" alt="Google Play" /> : null}
                </div>
            </div>
        </div>
    )
}

export default Game