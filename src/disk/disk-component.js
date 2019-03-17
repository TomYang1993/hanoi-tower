import React, { Component } from 'react';
import './disk.css'

export default function Disk({ id, onMoveClick, state }) {

    let diskStyle;

    switch (id) {
        case 1:
        diskStyle = {
            width: '120px',
            height: '50px',
            backgroundColor: 'aqua',
            margin: 'auto'
        }
            break;
        case 2:
        diskStyle = {
            width: '160px',
            height: '50px',
            backgroundColor: 'aqua',
            margin: 'auto'
        }
            break;
        case 3:
        diskStyle = {
            width: '200px',
            height: '50px',
            backgroundColor: 'aqua',
            margin: 'auto'
        }
            break;
        default:
            break;
    }

 

    return (
        <div style={diskStyle} onClick={() => onMoveClick(id)}>
        </div>
    );
}

