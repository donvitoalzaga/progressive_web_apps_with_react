import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';
import NotificationResource from '../resources/NotificationResource';

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
      this.listenForBannerInstall();
    });

    this.notifications = new NotificationResource(
      firebase.messaging(),
      firebase.database()
    );

    loadChat();
    loadLogin();
    loadUser();
  }

  listenForBannerInstall = () => {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('beforeinstallprompt Event fired!');
      e.preventDefault()
      // Stash the event so it can be triggered later
      this.deferredPrompt = e;
    })
  }

  handleSubmitMessage = msg => {
    const data = {
      msg,
      author: this.state.user.email,
      user_id: this.state.user.uid,
      timestamp: Date.now(),
    };

    firebase.database().ref('messages/').push(data);

    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then(choice => {
        console.log(choice);
      })
      this.deferredPrompt = null;
    }
  };

  render() {
    const LoginContainer = AsyncComponent(loadLogin);
    const UserContainer = AsyncComponent(loadUser);
    const ChatContainer = AsyncComponent(loadChat);

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

const loadLogin = () => {
  return import('./LoginContainer').then(module => module.default);
};

const loadChat = () => {
  return import('./ChatContainer').then(module => module.default);
};

const loadUser = () => {
  return import('./UserContainer').then(module => module.default);
};

export default withRouter(App)
