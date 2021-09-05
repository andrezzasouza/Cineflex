import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home/Home';
import Film from './Film/Film';
import Session from './Session/Session';
import Success from './Success/Success';



function App() {

  const [confirmation, setConfirmation] = useState({});
  const [selectedArray, setSelectedArray] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/sessoes/:idFilm" exact>
          <Film />
        </Route>
        <Route path="/assentos/:idSession" exact>
          <Session
            setConfirmation={setConfirmation}
            selectedArray={selectedArray}
            setSelectedArray={setSelectedArray}
          />
        </Route>
        <Route path="/sucesso" exact>
          <Success 
            confirmation={confirmation} 
            selectedArray={selectedArray} 
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
