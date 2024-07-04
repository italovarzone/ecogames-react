import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GameContainer from './components/GameContainer';
import PlayerInfo from './components/PlayerInfo';

const App: React.FC = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const loadGame = (game: string) => {
    setSelectedGame(game);
    if (isSidebarClosed) {
      toggleSidebar();
    }
  };

  return (
    <div className="container">
      <button onClick={toggleSidebar} className="toggle-sidebar-btn">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <Sidebar
        isClosed={isSidebarClosed}
        loadGame={loadGame}
      />
      <main className={`content ${isSidebarClosed ? 'closed' : ''}`}>
        <h1>Ecogames</h1>
        <GameContainer game={selectedGame} />
      </main>
      <PlayerInfo />
    </div>
  );
};

export default App;
