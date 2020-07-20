import React, {Fragment} from 'react';
import './App.css';
import List from "./containers/List";

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand">
          Aplicaciones Web Películas
        </a>
      </nav>
      <main>
        <div className="container">
          <List/>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
