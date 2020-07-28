import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/pages/Home';
import Erro404 from '../src/pages/Erro404';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route component={Erro404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);