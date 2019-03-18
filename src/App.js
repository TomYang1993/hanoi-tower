import React from 'react';
import './App.css';
import HolderListState from './holder-list/holder-list-state'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function App({ state, handleClick }) {

  const rodStyle = [
    {
      position: 'absolute',
      bottom: '3%',
      left: '12.5%',
      width: '3%',
      height: '210px',
      backgroundColor: "#e5453d",
      zIndex: 0
    },
    {
      position: 'absolute',
      bottom: '3%',
      left: '40.5%',
      width: '3%',
      height: '210px',
      backgroundColor: "#e5453d",
      zIndex: 0
    },
    {
      position: 'absolute',
      bottom: '3%',
      left: '68.5%',
      width: '3%',
      height: '210px',
      backgroundColor: "#e5453d",
      zIndex: 0
    }
  ]

  return (
    <div className="App">
      <div className="spacing"></div>
      <div className="banner">
        {state.winner ? <div>You are the winner!</div> : <div></div>}
        You Took {state.step} Steps already
        <button onClick={() => handleClick()}>Reset</button>
      </div>
      {rodStyle.map((style, index) => {
        return <div key={index} style={style}></div>
      })}

      <HolderListState />
    </div>
  );
}

export default DragDropContext(HTML5Backend)(App)



