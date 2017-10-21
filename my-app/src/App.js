import React, { Component } from 'react';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="">
          <div className="charcoal">
            <h1 className="App-title">CALIFORNIA SURF FORECAST</h1>
            <h5 className="subtitle">Your guide to the Golden State's best waves</h5>
            <img src="http://genealogy.ericstoltz.com/wp-content/uploads/sites/3/2014/06/500px-Flag_of_California.svg_.png" alt="California Flag" height="100px" />
          </div>
        </header>
        <body>
          <p>Hello World</p>
        </body>
        <footer>Thank you to Spitcast for this project's content source. Learn more <a href="http://www.spitcast.com">here.</a>
        </footer>
      </div>
    );
  }
}

export default App;



//TRANSPARENT CALIFORNIA FLAG: http://www.flagguys.com/img/cabear.gif