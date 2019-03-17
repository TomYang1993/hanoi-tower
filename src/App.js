import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HolderList from './holder-list/holder-list-component'
import HolderListState from './holder-list/holder-list-state'

export default function App() {

  return (
    <div className="App">
      <div className="spacing"></div>
      <HolderListState />
    </div>
  );
}



