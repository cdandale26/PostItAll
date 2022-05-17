import React from 'react';
import './Note.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) =>{
    
    return (
        <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea name="" id="" cols="30" rows="10" className="note_text" defaultValue={props.note.text}></textarea>
            <p>{props.note.time}</p>
            <DeleteOutlineIcon sx={{ fontSize: 30}} />
        </div>
        </>
    )
}

export default Note;