import React from 'react';
import './Note.css'

const Note = (props) =>{
    
    return (
        <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea name="" id="" cols="30" rows="10" className="note_text" defaultValue={props.note.text}></textarea>
            <p>{props.note.time}</p>
        </div>
        </>
    )
}

export default Note;