import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Page from './Page';

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

          <Route exact path="/create"> 
            <Create />
          </Route>

          <Route exact path="/logins/:id"> 
            <BlogDetails />
          </Route>

          <Route exact path="/page"> 
            <Page />
          </Route>

          <Route path='*'>
            <NotFound />
          </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
