import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Create from './components/Create';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
          <div className="content">
          <Switch>
          <Route exact path="/">
                <Home></Home>
          </Route>
          <Route path="/create">
                <Create></Create>
          </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

/*
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './Blogdetails';
import NotFound from './NotFound';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
              <Create></Create>
              </Route>
              <Route path ="/blog/:id">
                <BlogDetails />
              </Route>
              <Route>
                <NotFound path="*"></NotFound>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
*/