import React from 'react';
import './InfoView.css';
import IconButton from '../common/IconButton';

// TODO: load data dynamically

const coverStyle = {
  backgroundImage: "url('http://1.bp.blogspot.com/-BbbJXf3HnkI/ToHMXghDy_I/AAAAAAAAAs0/fiYVm2f4kiE/s1600/IMG_2874.JPG')"
}

class InfoView extends React.Component {
  render() {
    const { onClose, isHidden } = this.props;
    return (
      <div className={`InfoView ${!isHidden ? 'InfoView--visible' : ''}`}>
        <IconButton onClick={onClose} className="InfoView-close" icon="times" />
        <div className="InfoView-cover" style={coverStyle}></div>
        <div className="InfoView-content">
          <h1 className="InfoView-title">Pirkka III-olut 4,5%</h1>
          <div className="InfoView-description">Pirkka olut on raikas suomalainen lagerolut, joka valmistetaan kotimaisesta ohramaltaasta ja jota täydentää hieno aromi-humalointi. Se nautitaan kylmänä.</div>
          <div className="InfoView-rating">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-alt" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
};

export default InfoView;
