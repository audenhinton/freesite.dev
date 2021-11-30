// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.min.js.map'

// import stylesheet
import "./assets/scss/app.scss"

// import views
import Home from "./home"

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);