import React from 'react';

class CameraView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      streamSource: null,
    }
  }

  createVideoSource = (stream) => {
    console.log(stream);
    const videoSourceUrl = URL.createObjectURL(stream);
    console.log(videoSourceUrl);
    this.setState({streamSource: videoSourceUrl});
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
        <video autoPlay style={{height: '500px', width: '100%'}} src={this.state.streamSource}/>
        <button className="CameraView-button">Capture</button>
      </div>
    );
  }
};

export default CameraView;
