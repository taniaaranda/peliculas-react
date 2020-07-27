import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './firebase'
import 'bootswatch/dist/superhero/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Barra from './components/Barra';
import MisPeliculas from './components/MisPeliculas';




ReactDOM.render(
  <React.StrictMode>
    <div>
        <BrowserRouter>
          <Barra/>
          <br/>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/mis_peliculas" component={MisPeliculas} /> 
              </Switch>
        </BrowserRouter>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
