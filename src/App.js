import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Berechnung from './components/Berechnung'
import Berechnung2 from './components/Berechnung2'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router> 
    <div className="App">
      <Nav />
      
      <Switch>
      <Route path='/'exact component={Home} />
      <Route path='/Berechnung'component={Berechnung} />
      <Route path='/Berechnung2'component={Berechnung2} />
      
      
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
