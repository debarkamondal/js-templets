import React, { useState } from 'react';


export default function TextForm(props) {

    const handleUpCase = (event) => {
        event.preventDefault();
        let newText = text.toUpperCase();
        console.log(newText)
        setText(newText);
    }

    const handleLowCase=(event)=>{
        event.preventDefault();
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const clearTextArea=(event)=>{
        event.preventDefault();
        setText("");
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className='my-3 container'>
                <h1>{props.heading}</h1>
                <form>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleInputPassword1" onChange={handleChange} value={text} rows="8" />
                    </div>
                    <button className="btn btn-primary" onClick={handleUpCase}>Convert to upper case</button>
                    <button className="mx-3 btn btn-primary" onClick={handleLowCase}>Convert to lower case</button>
                    <button className="btn btn-primary" onClick={clearTextArea}>Clear</button>
                </form>
            </div>
            <div className="container">
            <h2 className='text-center'>Your text details</h2>
                <p>{(text === "")? 0 : text.split(" ").filter((character)=>{
                    return character !== "" && character !== "/n"
                    }).length} words and {text.trim().length} characters</p>
                <p>You saved "{text.trim().split(" ").length * 0.008}" minutes</p>
                <h2 className='text-center'>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
