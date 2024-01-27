import React from 'react';
import '../styles/newSession.css'
import { useNavigate } from 'react-router-dom';
function App() {
    const navigate = useNavigate();
    const handleSubmition = (event) => {
        event.preventDefault();
        navigate('/home');
    }
  return (
    <div>
          <head>
            <title>Blue Segment</title>
        </head>
        <body>
            <button class="backButton" onClick={()=>navigate('/')}> Go Back</button>
            <div class="centered">
                <div class="form_div">
                    
                        <form class = "formClass" onSubmit={handleSubmition}>  
                            <input class ="inputClass" type="text" name="sessionName" id="sessionName" placeholder="Session Name"/>
                            <input class ="inputClass" type="text" name="CSV" id="csvFilePath" placeholder="CSV File path"/>
                            <button class = "butt1class" >enter</button>
                        </form>
                   
                </div>
            </div>
          
            
        </body>
    </div>
  );
}

export default App;