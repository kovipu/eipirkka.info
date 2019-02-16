import React from 'react';

import './CameraView.css';

class CameraView extends React.Component {

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();

    this.state = {
      streamSource: null,
      photoTaken: false,
    }
  }

  createVideoSource = (stream) => {
    console.log(stream);
    this.videoRef.current.srcObject = stream;
  }

  initializeCanvas = () => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#444444';
    ctx.fillRect(0,0,canvas.width, canvas.height);
  }

  clearPhoto = () => {
    const { onClear } = this.props;
    this.setState({photoTaken: false});
    onClear();
  }

  takeSnapshot = () => {
    const { onPhoto } = this.props;
    const canvas = this.canvasRef.current;
    const video = this.videoRef.current;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // HACK: Bypassing React here to force the image for us.
    const image = document
      .getElementById('canvasHack')
      .toDataURL('image/png');
    // I'm sorry.

    this.setState({photoTaken: true});
    onPhoto(image);
  }

  componentDidMount() {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(this.createVideoSource)
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }

  render() {
    const { photoTaken } = this.state;
    return (
      <div className="CameraView">
        <button hidden={!photoTaken} onClick={this.clearPhoto} className="CameraView-clearButton">Uusi kuva</button>
        <canvas hidden={!photoTaken} id="canvasHack" className="CameraView-video" ref={this.canvasRef} />
        <video hidden={photoTaken} className="CameraView-video" autoPlay={true} ref={this.videoRef}/>
        <button hidden={photoTaken} className="CameraView-snapButton" onClick={this.takeSnapshot}>Capture</button>
      </div>
    );
  }
};

export default CameraView;
