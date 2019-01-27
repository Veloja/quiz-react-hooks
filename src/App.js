import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import FullPlayer from './components/FullPlayer';
import Players from './components/Players';
import Quiz from './components/Quiz';

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route path='/' exact component={Players} />
          <Route path='/players/:id' component={FullPlayer} />
          <Route path='/quiz' exact component={Quiz} />
        </>
      </Router>
    );
  }
}

export default App;
