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
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  submitData = (data) => {
    console.log('Data received', data);
    setTimeout(() => {
      this.setState({currentLabel: 'pirkka3'});
    }, 1000)
  }

  clearState = () => {
    this.setState(initialState);
  }

  showDetails = () => {
    this.setState({showDetails: true});
  }

  renderCameraView() {
    const { currentLabel } = this.state;
    return (
      <React.Fragment>
        <header className="App-header"><img className="App-logo" src="https://via.placeholder.com/64/09f/fff.png%20C/O%20https://placeholder.com/"></img></header>
        <div className="App-content">
        <CameraView
          onClear={this.clearState}
          onPhoto={this.submitData}/>
        </div>
        <ResultFooter onShowDetails={this.showDetails} label={currentLabel} />
      </React.Fragment>
    )
  }

  render() {
    const { showDetails } = this.state;

    return (
      <div className="App">
      {showDetails
        ? <InfoView onClose={this.clearState} />
        : this.renderCameraView()
      }
      </div>
    );
  }
}

export default App;
