import React, { useState } from 'react'

export default function Text1(props) {

    const aa = () => {
        // console.log("uuper case click"+text)
        let newtext = text.toUpperCase();
        setText(newtext)     //settext ma j lakhyu hase e thai jase
        props.funAlert("converted into upper case","success")
    }
    const aaa = () => {
        let newtext1 = text.toLowerCase();
        setText(newtext1);
        props.funAlert("converted into lower case","success")

    }
    const aaaa = () => {
        let newtext1 = "";            //clear text
        setText(newtext1);

        props.funAlert("clear your data","success")

    }
    const aaaaa = (event) => {
        let space = text.split(" ").join("")    //remove white spaces
        setText(space)

        props.funAlert("succesfully remove white space","success")

    }
    // const copy=()=>{
    //     var cp=document.getElementById("myb");
    //     // text.select();
    //     cp.setSelectionRange(0, 99999); 
    //     navigator.clipboard.writeText(text.value);
    // }
    const bb = (event) => {
        // console.log("handle on chang ")
        setText(event.target.value)
        // setText("bchjnbjm") ;    //set Text ne update karva
    }


    const [text, setText] = useState("");
    // text="vghjvhbj"   //wrong way to update state


    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1 className='my-2'>{props.headingTxt}</h1>
                <div className="mb-3">
                    {/* <label for="myForm"  className="form-label">TextArea</label> */}
                    <textarea className="form-control" rows="8" style={{backgroundColor:props.mode==='dark'?'#b9b7b7':'white',color:props.mode==='dark'?'white':'black'}} onChange={bb} id="myForm" value={text} placeholder='enter text'  ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={aa}>convert to upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={aaa}>convert to lower case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={aaaa}>clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={aaaaa}>remove white space</button>
                {/* <button className="btn btn-primary mx-2" id="myb"onClick={copy}> copy</button> */}


            </div>
            <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}} >
                <h1>your text summary</h1>
                <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} word and {text.length} charcters</p>
            

                <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text:"enter somthing into textbox for priview it"}</p>
            </div>

        </>
    )
}
