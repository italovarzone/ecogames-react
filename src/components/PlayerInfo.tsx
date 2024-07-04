import React, { useState } from 'react';

const PlayerInfo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showPlayerInfo = () => {
    setIsVisible(true);
  };

  const hidePlayerInfo = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div id="player-info-container">
          <p>Player Info</p>
          <button onClick={hidePlayerInfo} className="close-btn">
            <i className="fas fa-times"></i> Fechar
          </button>
        </div>
      )}
    </>
  );
};

export default PlayerInfo;
