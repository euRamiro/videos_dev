import React from 'react';
import './Menu.css';
import Logo from '../../assets/logo.png';
import Botao from '../Botao';

function Menu () {
  return (
    <nav className="Menu">
      <a href="/"/>
      <img className="Logo" src={Logo} alt="logo"/>
      <Botao as="a" className="ButtonLink" href="/">Novo vídeo</Botao>
    </nav>
  );
}

export default Menu;