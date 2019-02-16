import React from 'react';
import './ShutterButton.css';

export default function ShutterButton({ hidden, className, onClick, icon }) {
    return <div hidden={hidden} role="button" onClick={onClick} className={`ShutterButton ${className ? className : ''}`}><i className={`fas fa-${icon} fa-2x`}></i></div>
}