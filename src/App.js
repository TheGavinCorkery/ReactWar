import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  
  render() { 
    return ( 
      <div className = "container-fluid">
        <Card />
      </div>
     );
  }
}
 
export default App;
