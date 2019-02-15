import React from 'react';

class CameraView extends React.Component {

  

  componentDidMount() {
    if (navigator.mediaDevices.getUserMedia) {

    }
  }

  render() {
    return (
      <div className="CameraView">
        <video/>
        <button className="CameraView-button">Capture</button>
      </div>
    );
  }
};

export default CameraView;
