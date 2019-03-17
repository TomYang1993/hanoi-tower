import React, { Component } from 'react';
import './holder.css'

export default function Holder({children}) {
      return (
        <div className="holder">
          {children}
        </div>
      );
  }
  
