import React, { Component } from 'react';
import MoveDisks from '../containers/moveDisks'
import Holder from '../holder/holder-component'
import './holder-list.css'

export default function HolderList( {state} ) {

  const holders = [];
  for (let i = 0; i < 9; i++) {
    holders.push(renderHolder(i, state));
  }

  return (
    <div className="disk-container">
        {holders}
    </div>
  );
}



function renderHolder(i, state) {
  let disks = state.disks;
  console.log(disks)
//   let disks = [{ id: 1, position: 0 }, { id: 2, position: 3 }, { id: 3, position: 6 }];
  let diskExists = disks.filter(item => item.position === i);
  const piece = diskExists[0] ? <MoveDisks id={diskExists[0].id} /> : null;

  return (
      <Holder key={i}>
        {piece}
      </Holder>
  );
}


