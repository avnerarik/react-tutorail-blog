import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Newpost from './Components/Newpost';
import Postcontent from './Components/Postcontent';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/newpost">
              <Newpost />
            </Route>
            <Route path="/postcontent/:id">
              <Postcontent />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

//Spining atom log component
//import Atom from './Atom/Atom';
//  <Atom />