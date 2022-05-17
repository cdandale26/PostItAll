import React from 'react';
import './Note.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) =>{
    
    return (
        <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea name="" id="" cols="30" rows="10" className="note_text" defau ltValue={props.note.text}></textarea>
            <div className="note_footer">
                <p>{props.note.time}</p>
                <DeleteOutlineIcon 
                    className="del_icon" 
                    sx={{fontSize: 30}} 
                    onClick={() => props.deleteNote(props.note.id)} />
            </div>
            
        </div>
        </>
    )
}

export default Note;