import React from 'react';
import '../../App.css';

class DisclaimerPopup extends React.Component {
  render() {
    return (
      <div className='disclaimer_popup'>
        <div className='disclaimer_popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>Disclaimer popup</button>
        </div>
      </div>
    );
  }
}


export default DisclaimerPopup;