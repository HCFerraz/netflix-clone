import React from 'react';
import ReactDOM from 'react-dom';
import FeaturesScreen from './screens/Features'
import Informations from './screens/Informations'
import Presentation from './screens/Presentation'
import Questions from './screens/Questions'
import "./styles/Global.css"

ReactDOM.render(
  <React.StrictMode>
    <Presentation />
    <FeaturesScreen />
    <Questions />
    <Informations />
  </React.StrictMode>,
  document.getElementById('root')
);