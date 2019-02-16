import React from 'react';
import './ResultFooter.css';

export default ({ label, onShowDetails }) => {
    switch (label) {
      case 'pirkka3':
        return (
          <footer className="ResultFooter ResultFooter--success">
            <div>Pirkka III-olut 4,5%</div>
            <button onClick={onShowDetails} className='btn'>Lue lisää</button>
          </footer>
        )
      case 'none':
        return (
          <footer className="ResultFooter ResultFooter--failure">
            <div>Ei oo pirkkaa!</div>
          </footer>
        );
      default:
          return <footer></footer>;
    }
  }