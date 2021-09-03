import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Home from './Home/Home';
import Film from './Film/Film';
import Session from './Session/Session';
import Success from './Success/Success';
import axios from 'axios';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route path="" exact>
          <Home />
        </Route> */}
        {/* <Route path="" exact>
          <Film />
        </Route> */}
        <Route path="" exact>
          <Session />
        </Route>
        {/* <Route path="" exact>
          <Success />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
