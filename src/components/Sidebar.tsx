import React from 'react';

interface SidebarProps {
  isClosed: boolean;
  loadGame: (game: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isClosed, loadGame }) => {
  return (
    <aside className={`sidebar ${isClosed ? 'closed' : ''}`}>
      <h2 className="user-greeting">Olá, Ítalo!</h2>
      <ul>
        <li onClick={() => loadGame('perfil')}>Perfil</li>
        <li onClick={() => loadGame('ranking')}>Ranking</li>
        <li onClick={() => loadGame('avaliar')}>Avaliar a Plataforma</li>
      </ul>
      <h2>Jogos</h2>
      <ul>
        <li onClick={() => loadGame('cacapalavras')}>Caça Palavras</li>
        <li onClick={() => loadGame('quiz')}>Quiz ODS</li>
        <li onClick={() => loadGame('hangame')}>Hangame</li>
      </ul>
      <footer className="footer">
        <p>v1.0.0-beta1 - Todos os direitos reservados &copy; 2024</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
