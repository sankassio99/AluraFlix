import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import CadastroVideo from './pages/cadastro/video/index.js';
import CadastroCategoria from './pages/cadastro/categoria/index.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;

const Pagina404 = () => (<h1>Pag Not Found 404</h1>)


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

