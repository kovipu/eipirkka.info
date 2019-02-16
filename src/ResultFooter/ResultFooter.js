import React from 'react';
import Button from '../common/Button';
import './ResultFooter.css';

export default ({ label, onShowDetails }) => {
    switch (label) {
      case 'pirkka3':
        return (
          <footer className="ResultFooter ResultFooter--success">
            <div className="ResultFooter-title">
            <span>Pirkka III-olut 4,5%</span>
            <i style={{color: '#2ecc71'}} className="fa fa-check" aria-hidden="true"></i>
            </div>
            <Button style={{background: '#2ecc71'}} onClick={onShowDetails} className='btn'>Lue lisää</Button>
          </footer>
        )
      default:
        return (
          <footer className="ResultFooter ResultFooter--failure">
            <div className="ResultFooter-title">
            <span>Ei oo pirkkaa!</span>
            <i style={{color: '#e74c3c'}} className="fa fa-times" aria-hidden="true"></i>
          </div>
          </footer>
        );
    }
  }