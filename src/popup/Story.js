import React from 'react';

class Story extends React.Component {
  render() {
    return (
      <>
        <p>
          Popup Page can trigger actions by sending messages to the background.js file. The background page has access
          to the chrome browser APIs.
        </p>
      </>
    );
  }
}

export default Story;
