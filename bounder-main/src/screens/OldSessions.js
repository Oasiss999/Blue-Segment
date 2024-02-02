import React,{useState} from 'react';
import '../styles/newSession.css'
import DropDown from '../components/DropDownSessions/DropSessions.js'
import BackButton from '../components/additional-components/Button/BackButton.js';
function OldSessions  () {
    
    
   
    return (

        <div>
        <BackButton />
        
        <DropDown  />
        </div>
    );
};

export default OldSessions;