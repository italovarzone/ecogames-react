import React from 'react';

interface GameContainerProps {
  game: string | null;
}

const GameContainer: React.FC<GameContainerProps> = ({ game }) => {
  const getGameIframeSrc = (game: string) => {
    switch (game) {
      case 'cacapalavras':
        return '../../jogos/cacapalavras/index.html';
      case 'hangame':
        return '../../jogos/forca/index.html';
      case 'ecopuzzle':
        return '../../jogos/ecopuzzle/index.html';
      case 'quiz':
        return '../../jogos/quiz/index.html';
      default:
        return '';
    }
  };

  return (
    <div id="game-container">
      {game ? (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          id="game-iframe"
          src={getGameIframeSrc(game)}
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      ) : (
        <h2>Bem-vindo à Plataforma de Jogos</h2>
      )}
    </div>
  );
};

export default GameContainer;
