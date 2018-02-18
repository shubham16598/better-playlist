import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregate extends Component{
  render(){
    return (
      <div style={{width:"40%",display:"inline-block"}}>
      <h2>Number Text</h2>
      </div>
    )
  }
}

class Filter extends Component{
   render(){
     return (
       <div>
       <img/>
       <input type="text"/>
       </div>
     )

   }
}

class Playlist extends Component{
   render(){
     return (
       <div style={{width:"25%",display:"inline-block"}}>
         <img/>
         <h3>Song 1</h3>
         <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
       </div>
     )

   }
}

class App extends Component {
  render() {
    let color = "green";

    return (
      <div className="App">
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
}

export default App;
