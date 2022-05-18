import React from 'react';
import './Note.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Margin } from '@mui/icons-material';

let timer=500,timeout;
const Note = (props) =>{
    const formatDate = (value) =>{
        const months =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        if(!value) return "";
        const date = new Date(value); 
        date.toLocaleString('en-US', {timeZone: 'America/New_York'});
        let hrs = date.getHours();
        let amPm = hrs>12?"PM":"AM";
        hrs=hrs>12?hrs=hrs%12: hrs;
        let min = date.getMinutes();
        min = (min <10) ? "0" + min: min;
        let day= date.getDate();
        const monthName = months[date.getMonth()];
        return `${hrs}:${min} ${amPm} ${day} ${monthName}`;
    }

    const debounce = (func) =>{
        clearTimeout(timeout);
        timeout = setTimeout(func,timer);
    }
    
    const updateText = (text,id) =>{
        debounce(() => props.updateText(text,id))
    }

    return (
        <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10" 
                className="note_text" 
                defaultValue={props.note.text}
                onChange={(event) => updateText(event.target.value, props.note.id)}
                >
            </textarea>
            <div className="note_footer">
                <p>{formatDate(props.note.time)}</p>
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