import React from 'react';

import './CameraView.css';

class CameraView extends React.Component {

  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      streamSource: null,
    }
  }

  createVideoSource = (stream) => {
    console.log(stream);
    this.videoRef.current.srcObject = stream;
  }

  componentDidMount() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(this.createVideoSource)
        .catch((err) => {
          console.log('Error', err);
        })
    }
  }

  render() {
    return (
      <div className="CameraView">
        <video className="CameraView-video" autoPlay={true} ref={this.videoRef}/>
        <button className="CameraView-button">Capture</button>
      </div>
    );
  }
};

export default CameraView;
