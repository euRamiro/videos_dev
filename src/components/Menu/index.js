import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/logo.png';
import Botao from '../Botao';

function Menu () {
  return (
    <nav className="Menu">
      <Link to="/"/>
      <img className="Logo" src={Logo} alt="logo"/>
      <Botao as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</Botao>
    </nav>
  );
}

export default Menu;