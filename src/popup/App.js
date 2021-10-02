import React from 'react';
import Story from './Story.js';

class App extends React.Component {
  render() {
    return (
      <div className="container p-3">
        <h1>React Popup Page</h1>
        <Story />
      </div>
    );
  }
}

export default App;
