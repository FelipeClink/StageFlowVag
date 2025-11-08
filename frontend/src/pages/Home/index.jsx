import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

function Home() {
  return (
    <Container>
      <nav>
        <Link to="/audiovisual">Audiovisual</Link>
        <Link to="/cerimonial">Cerimonial</Link>
        <Link to="/marketing">Marketing</Link>
        <Link to="/evento">Evento</Link>
        <Link to="/solicitacoes">Solicitações</Link>
      </nav>
      <div className="principal">
      </div>
    </Container>
  );
}

export default Home;