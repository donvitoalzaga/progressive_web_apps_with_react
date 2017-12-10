import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import './app.css';

// const App = () => {
//   return <h1>Hello from everybody!!</h1>
// };

class App extends Component {
  render() {
    return(
      <div id="container" className="inner-container">
        <LoginContainer />
      </div>
    );
  }
}

export default App;
