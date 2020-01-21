import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Popular from './Components/Popular'
import Upcoming from './Components/Upcoming'
import TopRated from './Components/TopRated'





class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Popular} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/top-rated" component={TopRated} />
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
