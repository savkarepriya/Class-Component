import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="color4">
<h1>Hello from Default file</h1>
<hr />
<FirstClass />
<hr />
<SecondClass />
<hr />
<ThirdClass />
<hr />
</div>
  );
}

class FirstClass extends React.Component {
  render() {
  return (
  <div  className="color1">
  <h2>This is First Class</h2>
  <p>
    this is First paragraph.
  </p>
  </div>
  );
  }
}

class SecondClass extends React.Component {
  render() {
  return (
  <div className="color2">
  <h2>This is Second Class</h2>
  <p>
    this is second paragraph.
  </p>
  </div>
  );
  }
}

class  ThirdClass extends React.Component {
  render() {
  return (
  <div className="color3">
  <h2>This is Third Class</h2>
  <p>
    this is Third paragraph.
  </p>
  </div>
  );
  }
} 


export default App;
