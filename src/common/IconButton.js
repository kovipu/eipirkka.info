import React from 'react';
import './IconButton.css';

export default function IconButton({ hidden, className, onClick, icon }) {
    return <div hidden={hidden} role="button" onClick={onClick} className={`IconButton ${className ? className : ''}`}><i className={`fas fa-${icon} fa-2x`}></i></div>
}