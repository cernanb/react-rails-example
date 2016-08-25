import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <h1>Hello from React!</h1>
    );   
  }
}

let documentReady = () => {
  ReactDOM.render(<Main />, document.getElementById('root'));
};

$(documentReady);