import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Videos';
import CadastroCategoria from './pages/cadastro/Categoria';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/cadastro/video' component={CadastroVideo}/>
      <Route exact path='/cadastro/categoria' component={CadastroCategoria}/>
      <Route component={() => (
        <div>404 - Página não encontrada.</div>
        )}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

