import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home/Home';
import Film from './Film/Film';
import Session from './Session/Session';
import Success from './Success/Success';

function App() {

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
          <Session />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
