import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';



//home page
          //header
          //-about
          //-skills
            // -download resume
// projects
//contact 


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/projects">
            <Projects/>
          </Route>

          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path= "/">
            <Home/>
          </Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
