import { useEffect, useState } from 'react';

import { GameBanner } from './components/GameBanner';

import './styles/main.css';

import logoImg from './assets/logo-nlw-esport.svg';
import { CreatAddBanner } from './components/CreateAddBanner';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  //Porque é uma lista estou iniciando com um array vazio
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return <GameBanner bannerUrl={game.bannerUrl} title={game.title} adsCounts={game._count.ads} />;
        })}
      </div>

      <CreatAddBanner />
    </div>
  );
}

export default App;
