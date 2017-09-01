import React, { Component } from 'react';
// import logo from '../logo.svg';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './Home';
import CreatePost from './CreatePost';
import PostList from './PostList';
import ShowPost from './ShowPost';

class App extends Component {
  render() {
    return (
      <Router>
        <BaseLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreatePost} />
          <Route path="/show/:id" component={ShowPost} />
          <Route path="/show" component={PostList} />
        </Switch>
        </BaseLayout>
      </Router>
    );
  }
}

export default App;
