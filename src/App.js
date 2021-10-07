import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  
  render() { 
    return ( 
      <div className = "container-fluid">
        <div className = "row" id = "rules">
          <div className = "col-lg-3"></div>
          <div className = "col-lg-6">
            <p className = "align-middle">The game is War. Your objective is to draw the highest card. Whomever has the highest card at the end of a round, will be the winner.
            This game will be a best of 9 which means that the first person to reach 5 match wins, is the winner of the game. Good luck!
            </p>
          </div>
          <div className = "col-lg-3"></div>
        </div>
        <Card />
      </div>
     );
  }
}
 
export default App;
