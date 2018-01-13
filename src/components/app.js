import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';
import './app.css';

class App extends Component {
  state = { user: null };

  componentDidMount() {
  	firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.props.history.push('/login')
      }
  	});
  }

  render() {
    return(
      <div id="container" className="inner-container">
        <Switch>
          <Route exact path="/" component={ChatContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
