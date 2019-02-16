import React, { Component } from 'react';
import './App.css';
import CameraView from './CameraView/CameraView';
import ResultFooter from './ResultFooter/ResultFooter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewId: 'home',
      currentLabel: null,
      image: null,

    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({currentLabel: 'pirkka3'});
    }, 2000)
  }

  render() {
    const { currentLabel } = this.state;

    return (
      <div className="App">
        <header className="App-header"><img className="App-logo" src="https://via.placeholder.com/64/09f/fff.png%20C/O%20https://placeholder.com/"></img></header>
        <div className="App-content">
        <CameraView/>
        </div>
        <ResultFooter label={currentLabel} />
      </div>
    );
  }
}

export default App;
