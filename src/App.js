import Nav1 from './v6_components/Navbar_v6';
import './App.css';
import Text1 from './v6_components/Textform_v7';
import { useState } from 'react';
import Alert1 from './v6_components/Alert_v13';
import {
  BrowserRouter,
  Routes,
  Route,


} from "react-router-dom";

import About1 from './v6_components/About_v10';

function App() {

  const [mode, setMode] = useState('light');   //tell that where dark mode is enable or not
  const [alert, setAlert] = useState('null');


  const funAlert = (a, b) => {
    setAlert({
      msg: a,
      type: b
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }


  const togmode = (cls) => {
    // removeBodyClsses();
  
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      document.body.style.color = 'white'

      funAlert("darkmode is enable", "success")

      document.title = "TextUtils(Dark Mode)"     //jyare dark mode    hase tyare title change thase

      setInterval(() => {
        document.title = "hellooooooo"
      }, 2000)
      setTimeout(()=>{
        document.title="insall now"
      },2000)

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'

      funAlert("lightmode is enable", "success")
      document.title = "TextUtils(Light Mode)"  //jyare light mode hase typre title chang thase


    }
  }


// const removeBodyClsses=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
//   // document.body.classList.remove('bg-')
  
// }    
  return (
    <>
        <BrowserRouter>
<Nav1 titleTxt="TextUtils" aboutTxt="Aboutus" mode={mode} togmode={togmode}  />
<Alert1 alert={alert} />
       
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route path="/about" element={<About1  mode={mode}/>} />
          </Routes>
          <Routes>
            <Route
               path="/" 
               element={ 
 <Text1 headingTxt="Try TextUtils - Word Counter , Character Counter , remove extra spaces" mode={mode} funAlert={funAlert} />
                
               } 
             /> 
          </Routes>
        </div>
      </BrowserRouter>
  
    </>
  );
}

export default App;




// <Nav1 titleTxt="TextUtils" aboutTxt="Aboutus" mode={mode} togmode={togmode} togmode2={togmode2} />
// <Alert1 alert={alert} />
{/* <Text1 headingTxt="enter atext,to anlayz" mode={mode} funAlert={funAlert} /> */}






