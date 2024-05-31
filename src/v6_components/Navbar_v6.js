import {Link} from "react-router-dom";
import React from 'react'
import PropTypes from 'prop-types'
// import { Routes } from 'react-router-dom';


export default function Nav1(props) {
  return (
    
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        
      {/* <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}> */}

  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.titleTxt}</Link>
    {/* <a className="navbar-brand" href="Textform_v7">{props.titleTxt}</a> */}

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutTxt}</Link>
        </li>
      </ul>


{/* aama diff diff color mode mukva hoi to */}
{/* <div className="d-flex">
        <div className="bg-primary rounded mx-3" onClick={()=>props.togmode('primary')}  cursu style={{height:'30px',width:'30px',cursor:'pointer'}}>
        </div>
        <div className="bg-danger rounded mx-3" onClick={()=>props.togmode('danger')}  cursu style={{height:'30px',width:'30px',cursor:'pointer'}}>
        </div>
        <div className="bg-success rounded mx-3" onClick={()=>props.togmode('success')}  cursu style={{height:'30px',width:'30px',cursor:'pointer'}}>
          </div>
        <div className="bg-warning rounded mx-3" onClick={()=>props.togmode('warning')}  cursu style={{height:'30px',width:'30px',cursor:'pointer'}}>
        </div>
  
        
</div> */}


<div className={`form-check text-${props.mode==='light'?'dark':'light'}`}>
      {/* <div className={`form-check form-switch text-dark`}> */}

  <input className="form-check-input" type="radio" onClick={()=>props.togmode(null)} name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  enable {props.mode==='light'?'dark':'light'} mode
  </label>
</div>




    </div>
    
  </div>

</nav>
    </div>
    
    
  )
}



// props type
 Nav1.propTypes= {titleTxt:PropTypes.string.isRequired,
                 aboutTxt:PropTypes.string
}


//defualt props
Nav1.defaultProps={
  titleTxt:"set title h hear",             //jo aapde app.js ni andar value pass nahi kari hoi
  aboutTxt:"about text hear"
}