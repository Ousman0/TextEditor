import React, { useState } from 'react';
import '../Components/Text.css'


export default function TextEditor(props) {
const [Data, setData] = useState("ousman");

const handleOnclick1=()=>{
    let Updata=Data.toUpperCase();
    setData(Updata);
    props.ShowAlert('Text Converted To UpperCase','success');
};
const handleOnclick2=()=>{
    let Lowdata=Data.toLowerCase();
    setData(Lowdata);
    props.ShowAlert('Text Converted To LowerCase','success');
};
const handleOnclick3=()=>{
    setData("");
    props.ShowAlert('Text Cleared','success');
};
const handleOnclick4=()=>{
    let Updata2=Data.charAt(0).toUpperCase() + Data.slice(1);
    setData(Updata2);
    props.ShowAlert('Text Converted To First UpperCase','success');
};
const handleOnclick5=()=>{
    let AlUpdata=Data.split('').map((Data)=>Data.charAt(0).toUpperCase() + Data.slice(1))
    .join('');
    setData(AlUpdata);
    props.ShowAlert('Text Converted To All First UpperCase','success');
};
const handleOnclick6=()=>{
    navigator.clipboard.writeText(Data);
    props.ShowAlert('Copied To Clipboard','success');

};
const handleOnclick7=()=>{
    let DataTrim=Data.replace(/\s{2,}/g, ' ').trim();
    setData(DataTrim);
    props.ShowAlert('Text got Trimmed','success');
};


const handleOnchange=(event)=>{
    console.log("data changed");
    setData(event.target.value)
};

    return (
        <div>

        
    <div className="container">
      <h1 className='text-warning my-3 bg-body-secondary border'>
        Text Editor
        </h1>
        <div className='mb-3'>
            <textarea
            className={`form-control text-${props.Mode==='light'?'dark':'white'}`}
            style=
            {{backgroundColor:props.Mode==='light'?'white':'#315c78', }}
            value={Data}
            onChange={handleOnchange}
            rows="8"
            ></textarea>
        </div>
        <div className='d-flex justify-content-start'>
            <button className='btn btn-primary mx-2' onClick={handleOnclick1}>
                To Uppercase
            </button>
            <button className='btn btn-primary mx-2' onClick={handleOnclick2}>
                To Lowercase
            </button>
            <button className='btn btn-primary mx-2' onClick={handleOnclick3}>
                Clear
            </button>
            <button className='btn btn-primary mx-2' onClick={handleOnclick4}>
            FirstUp
            </button>
            <button className='btn btn-primary mx-2' onClick={handleOnclick5}>
                Every FirstUp
            </button>
            <button className='btn btn-primary mx-2' onClick={handleOnclick6}>
            Copy Text
            </button>
            <button className='btn btn-primary mx-2' onClick={handleOnclick7}>
              Remove Extra Spaces
            </button>
        </div>
    </div>
    <div className={`text-'dark' align container`}>
        <h2>Summery</h2>
        <p>
        {Data.length>0 ? Data.trim().split(/[ ]+/).length : 0} words and {Data.length} characters  
        </p>
        <h2>Preview</h2>
        <p>{Data}</p>
    </div>
    </div>
  )
}
