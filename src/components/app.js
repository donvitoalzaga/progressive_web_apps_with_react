import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';
import UserContainer from './UserContainer';
import NotificationResource from '../resources/NotificationResource';
import './app.css';

class App extends Component {
  state = { user: null, messages: [], messagesLoaded: false };

  onMessage = snapshot => {
    const messages = Object.keys(snapshot).map(key => {
      const msg = snapshot[key];
      msg.id = key;
      return msg;
    });
    this.setState({ messages });
  }

  componentDidMount() {
  	firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // this.listenForMessages();
        this.notifications.changeUser(user)
      } else {
        this.props.history.push('/login');
      }
    });
    
    firebase.database().ref('/messages').on('value', snapshot => {
      const data = snapshot.val();
      this.onMessage(data);
      if (!this.state.messagesLoaded) {
        this.setState({ messagesLoaded: true });
      }
    });

    this.notifications = new NotificationResource(
      firebase.messaging(),
      firebase.database()
    );
  }

  // listenForMessages = () => {
  //   firebase.database().ref('/messages')
  //     .on('value', snapshot => {
  //       this.onMessage(snapshot);
  //       if (!this.state.messagesLoaded) {
  //         this.setState({ messagesLoaded: true });
  //       }
  //     });
  // };

  handleSubmitMessage = msg => {
    const data = {
      msg,
      author: this.state.user.email,
      user_id: this.state.user.uid,
      timestamp: Date.now(),
    };

    firebase.database().ref('messages/').push(data);
  };

  render() {
    return(
      <div id="container" className="inner-container">
        <Switch>
          <Route exact path="/"
            render={() => <ChatContainer 
              onSubmit={this.handleSubmitMessage}
              user={this.state.user}
              messages={this.state.messages}
              messagesLoaded={this.state.messagesLoaded}
            />} 
          />
          <Route exact path="/login" component={LoginContainer} />
          <Route
            path="/users/:id" 
            render={({ history, match }) => (
              <UserContainer
                messages={this.state.messages}
                messagesLoaded={this.state.messagesLoaded}
                userID={match.params.id}
              />
            )}
          />
        </Switch>
      </div> 
    );
  }
}

export default withRouter(App)
