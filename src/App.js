import React, {Fragment} from 'react';
import './App.css';
import List from "./containers/List";

function App() {
  return (
    <Fragment>

      <main>
        <div className="container">
          <List/>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
