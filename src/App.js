import React, { Component } from 'react';
import './App.css';
import CameraView from './CameraView/CameraView';
import ResultFooter from './ResultFooter/ResultFooter';

const REQUEST_SUCCESS = 'request_success';
const REQUEST_PENDING = 'request_pending';
const REQUEST_FAILURE = 'request_failure';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewId: 'home',
      currentLabel: null,
      image: null,
      httpRequestStatus: '',
    };
  }

  submitData = (data) => {
    console.log('Data received', data);
    setTimeout(() => {
      this.setState({currentLabel: 'pirkka3'});
    }, 1000)
  }

  render() {
    const { currentLabel } = this.state;

    return (
      <div className="App">
        <header className="App-header"><img className="App-logo" src="https://via.placeholder.com/64/09f/fff.png%20C/O%20https://placeholder.com/"></img></header>
        <div className="App-content">
        <CameraView callback={this.submitData}/>
        </div>
        <ResultFooter label={currentLabel} />
      </div>
    );
  }
}

export default App;
