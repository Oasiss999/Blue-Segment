import '../../../styles/BackButton.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function BackButton() {
    const navigate = useNavigate();
  return (
    <div>
      <button class='backButton' onClick={()=>navigate('/')}>Back</button>
    </div>
  );
}

export default BackButton;