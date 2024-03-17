
import "../styles/timer.css"
import Timer from "../elements/Timer";

import 'bootstrap/dist/css/bootstrap.min.css'
 import {useState} from "react";
 import Settings from "../elements/Settings";
 import Settingscontext from "../elements/Settingscontext";

function App() {

 const [showSettings, setShowSettings] = useState(false);
 const [workMinutes, setWorkMinutes] = useState(45);
 const [breakMinutes, setBreakMinutes] = useState(15);


 
  return(
    <div className="container-body-timer">

    
    <main style={{backgroundColor:"transparent"}}>
      <Settingscontext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer/>}
      </Settingscontext.Provider>
    </main>
    </div>
  )


};

export default App;



