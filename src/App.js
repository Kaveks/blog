import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/blog/Home';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Singleitem from './components/blog/singleitem';
import Search from './components/blog/search';
import Create from './components/Staff/create';
import CreateEdit from './components/Staff/edit';
import Admindisplay from './components/Staff/Admindisplay';
import CreateDel from './components/Staff/delete';
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
          <Route path="/register">
                <Register></Register>
          </Route>
          <Route path="/login">
                <Login></Login>
          </Route>
          <Route path ="/logout">
                <Logout></Logout>
          </Route>
          <Route path='/post/:id'>
                <Singleitem></Singleitem>
          </Route>
          <Route path='/search'>
                <Search></Search>
          </Route>
          <Route exact path="/admin">
               <Admindisplay></Admindisplay>
          </Route>
          <Route path="/admin/create">
                <Create></Create>
          </Route>
          <Route path="/admin/edit/:id">
                <CreateEdit></CreateEdit>
          </Route>
          <Route path="/admin/delete/:id">
                <CreateDel></CreateDel>
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