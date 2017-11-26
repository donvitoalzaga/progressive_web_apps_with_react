import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
     <App/>,
     document.getElementById('root')
    );
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
