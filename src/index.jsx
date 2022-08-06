import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import './bable';
import React from 'react';
import  { render } from "react-dom";

const App = () => (

<div className="container">
    <h1>Webpack Course</h1>
    <hr/>
    <div className="box">
        <h2>Less</h2>
    </div>
    <div className="card">
        <h2>SCSS</h2>
    </div></div>
);

render(<App/>, document.getElementById('app'));
