import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [game, setGame] = useState([]);
    const [gamesPC, setGamesPC] = useState([]);
    const [gamesBrowser, setGamesBrowser] = useState([]);
  
    useEffect(() => {
        const url = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=452"
        const urlPC = "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc"
        const urlBrowser = "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser"

        const fetchData = async () => {
          fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "ed6eb2d4afmshff002dc63dabafap1ac141jsn8d33642db7da"
            }
          })
          .then(res => res.json())
          .then((result) => {
              setGame(result);
              //console.log(result)
          })

          fetch(urlPC, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "ed6eb2d4afmshff002dc63dabafap1ac141jsn8d33642db7da"
            }
          })

          .then(res => res.json())
          .then((result) => {
              setGamesPC(result);
              //console.log(result)
          })
          fetch(urlBrowser, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "ed6eb2d4afmshff002dc63dabafap1ac141jsn8d33642db7da"
            }
          })
          .then(res => res.json())
          .then((result) => {
              setGamesBrowser(result);
              console.log(result)
              setIsLoaded(true)
          })
        }
        fetchData()
    }, [])

  
    if (!isLoaded) {
      return <div>Chargement...</div>;
    }
    else {
      return (
          <div>
            <div className='w3-container w3-gray w3-center game-home'>
              <div>
                <p>{game.title}</p>
                <img src={game.thumbnail}/>
              </div>
            </div>
            <div>
              <h1 className='title-type-games'>PC</h1>
              <div className='w3-container items-games'>
                {gamesPC.filter((item, idx) => idx < 5).map(gamePC => (
                  <div id={gamePC.id}>
                    <img src={gamePC.thumbnail}/>
                    <p>{gamePC.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className='title-type-games'>Browser</h1>
              <div className='w3-container items-games'>
                {gamesBrowser.filter((item, idx) => idx < 5).map(gameBrowser => (
                  <div id={gameBrowser.id}>
                    <img src={gameBrowser.thumbnail}/>
                    <p>{gameBrowser.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      );
    }
}

export default Home