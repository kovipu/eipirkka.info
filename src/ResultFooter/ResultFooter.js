import React from 'react';
import Button from '../common/Button';
import './ResultFooter.css';

export default ({ label, onShowDetails }) => {
    switch (label) {
      case 'pirkka3':
        return (
          <footer className="ResultFooter ResultFooter--success">
            <div className="ResultFooter-title">Pirkka III-olut 4,5%</div>
            <Button onClick={onShowDetails} className='btn'>Lue lisää</Button>
          </footer>
        )
      case 'none':
        return (
          <footer className="ResultFooter ResultFooter--failure">
            <div className="ResultFooter-title">Ei oo pirkkaa!</div>
          </footer>
        );
      default:
          return <footer></footer>;
    }
  }