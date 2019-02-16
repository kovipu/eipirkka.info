import React, { Component } from 'react';
import './App.css';
import CameraView from './CameraView/CameraView';
import InfoView from './InfoView/InfoView';
import ResultFooter from './ResultFooter/ResultFooter';

const initialState = {
  currentLabel: null,
  image: null,
  httpRequestStatus: '',
  showDetails: false,
  lastResponse: {}
};

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  submitData = (data) => {
    const blop = dataURLtoBlob(data);
    const imageData = {
      uri: data,
      type: 'image/png',
      name: 'image.png',
    }
    let formData = new FormData();
    formData.append('image', blop);

    console.log(imageData, formData);
    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3001'}/predict`, {
      method: 'POST',
      body: formData,
      mode: 'cors'
    })
    .then(response => {
      return response.json();
    })
    .then(responseData => {
      console.log('response', responseData);
      this.setState({lastResponse: responseData})
    })
    .catch(err => {
      throw Error(err);
    })
  }

  clearState = () => {
    this.setState(initialState);
  }

  showDetails = () => {
    this.setState({showDetails: true});
  }

  closeDetails = () => {
    this.setState({showDetails: false});
  }

  renderCameraView() {
    const { lastResponse } = this.state;
    const { displayName } = lastResponse;
    console.log('Last response', lastResponse);
    return (
      <React.Fragment>
        <div className="App-content">
        <CameraView
          onClear={this.clearState}
          onPhoto={this.submitData}/>
        </div>
        {displayName && (
          <ResultFooter
            onShowDetails={this.showDetails}
            label={displayName}/>
        )}
      </React.Fragment>
    )
  }

  getBorderAccent = () => {
    const { lastResponse } = this.state;
    if (!lastResponse.displayName) {
      return '#fd79a8';
    }
    return lastResponse.displayName === 'pirkka3'
      ? '#2ecc71'
      : '#e74c3c';
  }

  render() {
    const { showDetails, lastResponse } = this.state;

    const hasResponse = lastResponse.displayName;

    return (
      <div className="App" style={{borderColor: this.getBorderAccent()}}>
        {this.renderCameraView()}
        { hasResponse && (
          <InfoView onClose={this.closeDetails} isHidden={!showDetails} />
        )}
      </div>
    );
  }
}

export default App;
