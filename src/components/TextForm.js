import React,{useState} from 'react'



export default function TextForm() {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = " ";
        setText(newText);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [text,setText] = useState("");
    
    return (
        <>
        <div className='container'>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            
        </div>
        <div className="container my-2">
            <h2>Your Text Summary :</h2>
            <p>Words : {text.split(" ").length}</p>
            <p>Characters : {text.length}</p>
            <p>Time to read : {0.008 * text.split(" ").length} minutes</p>
            <h4>Preview :</h4>
            <p>{text}</p>
        </div>
        </>
    );
}
 