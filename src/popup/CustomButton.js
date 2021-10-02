import React from 'react';
import Button from 'react-bootstrap/Button';

class CustomButton extends React.Component {
  HandleClick = () => {
    console.log('pushed');
    chrome.runtime.sendMessage({ text: 'I am a message from the popup!' });
  };

  render() {
    return (
      <>
        <Button type="button" onClick={this.HandleClick}>
          {this.props.message}
        </Button>
      </>
    );
  }
}

export default CustomButton;
