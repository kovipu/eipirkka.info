import React from 'react';
import './ResultFooter.css';

export default ({ label }) => {
    switch (label) {
      case 'pirkka3':
        return (
          <footer className="ResultFooter ResultFooter--success">
            <div>Pirkka III-olut 4,5%</div>
            <button className='btn'>Lue lisää</button>
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