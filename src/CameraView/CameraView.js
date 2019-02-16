import React from 'react';

import './CameraView.css';
import ShutterButton from '../common/ShutterButton';
import IconButton from '../common/IconButton';

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

  clearPhoto = () => {
    const { onClear } = this.props;
    this.setState({photoTaken: false});
    onClear();
  }

  takeSnapshot = () => {
    const { onPhoto } = this.props;
    const canvas = this.canvasRef.current;
    const video = this.videoRef.current;
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

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
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(this.createVideoSource)
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }

  render() {
    const { photoTaken } = this.state;
    const { isLoading } = this.props;

    const shutterBtn = isLoading
      ? <ShutterButton onClick={() => {}} icon="spinner fa-spin" /> 
      : <ShutterButton onClick={this.takeSnapshot} icon="camera" /> 

    return (
      <div className="CameraView">
        <div className="CameraView-viewfinder">
          <IconButton hidden={!photoTaken || isLoading} onClick={this.clearPhoto} className="CameraView-clearButton" icon="times" />
          <canvas hidden={!photoTaken} id="canvasHack" className="CameraView-canvas" ref={this.canvasRef} />
          <video hidden={photoTaken} className="CameraView-video" autoPlay={true} ref={this.videoRef} />
        </div>
        <div className="CameraView-footer">
          {shutterBtn}
        </div>
      </div>
    );
  }
};

export default CameraView;
