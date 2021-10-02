import React from 'react';
import CustomButton from './CustomButton.js';
import Story from './Story.js';

class App extends React.Component {
  render() {
    return (
      <div className="container p-3">
        <h1>React Popup Page</h1>
        <Story />
        <CustomButton message="Push me to send a message" />
      </div>
    );
  }
}

export default App;
