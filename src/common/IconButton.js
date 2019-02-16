import React from 'react';
import './IconButton.css';

export default function IconButton({ hidden, className, onClick, icon }) {
    return <button role="button" onClick={onClick} className={`IconButton ${className ? className : ''} ${hidden ? 'IconButton--hidden' : ''}`}><i className={`fas fa-${icon} fa-2x`}></i></button>
}