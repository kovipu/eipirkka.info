import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CameraView from './CameraView/CameraView';

function ResultFooter({ label }) {
  switch (label) {
    case 'pirkka3':
      return (
        <header className="App-footer App-footer--failure">
          <div>Pirkka III-olut 4,5%</div>
          <button className='btn'>Lue lisää</button>
        </header>
      )
    case 'none':
      return (
        <header className="App-footer App-footer--success">
          <div>Ei Pirkka!</div>
        </header>
      );
    default:
        return <header></header>;
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewId: 'home',
      currentLabel: null,
      image: null,

    };
  }

  onTakePhoto(dataUri) {
    console.log('takePhoto', dataUri);

    if (Math.random() >= 0.5) {
      this.setState({currentLabel: 'none'})
    } else {
      this.setState({currentLabel: 'pirkka3'})
    }
  }

  render() {
    const { currentLabel } = this.state;

    return (
      <div className="App">
        <header className="App-header"><img className="App-logo" src="https://via.placeholder.com/64/09f/fff.png%20C/O%20https://placeholder.com/"></img></header>
        <div className="App-content">
        <CameraView/>
        </div>
        <ResultFooter label={'pirkka3'} />
      </div>
    );
  }
}

export default App;
