import React, { Component } from 'react';
import './App.css';
import CameraView from './CameraView/CameraView';
import InfoView from './InfoView/InfoView';
import ResultFooter from './ResultFooter/ResultFooter';

const REQUEST_SUCCESS = 'request_success';
const REQUEST_PENDING = 'request_pending';
const REQUEST_FAILURE = 'request_failure';

const initialState = {
  currentLabel: null,
  image: null,
  httpRequestStatus: '',
  showDetails: false,
  lastResponse: {}
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  submitData = (data) => {
    setTimeout(() => {
      this.setState({currentLabel: 'pirkka3'});
    }, 1000)
    fetch('/image', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: data
    })
    .then(response => response.json())
    .then(responseData => {
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
    const { currentLabel } = this.state;
    return (
      <React.Fragment>
        <div className="App-content">
        <CameraView
          onClear={this.clearState}
          onPhoto={this.submitData}/>
        </div>
        <ResultFooter
          onShowDetails={this.showDetails}
          label={currentLabel}/>
      </React.Fragment>
    )
  }

  render() {
    const { showDetails } = this.state;

    return (
      <div className="App">
        {this.renderCameraView()}
        <InfoView onClose={this.closeDetails} isHidden={!showDetails} />
      </div>
    );
  }
}

export default App;
