import React from 'react';
import Button from '../common/Button';
import './WelcomeView.css';

export default ({isVisible, onDismiss}) => (
  <div className={`WelcomeView WelcomeView-background ${isVisible ? 'WelcomeView--visible' : ''}`}>
    <div className="WelcomeView-content">
      <div className="WelcomeView-info">Tervetuloa <strong>eipirkka</strong>-palveluun! 🍺</div>

      <div className="WelcomeView-info">
        Tämä sovellus tunnistaa kuvasta <strong>Pirkka III</strong> oluttölkin.
        Räpsäise tölkistä kuva ja sovellus kertoo juotko ehtaa tavaraa!
      </div>

      <div className="WelcomeView-info">
        Sovellus on toteutettu Sofokuksen ja Asteriskin hackathonissa <strong>15.-16.2.2019</strong>.
      </div>

      <Button onClick={onDismiss}>
        Homma OK!
      </Button>
    </div>
  </div>
)
