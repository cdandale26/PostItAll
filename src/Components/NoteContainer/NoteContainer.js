import React from 'react';
import Note from '../Note/Note';
import './NoteContainer.css';
import defaultNote from '../../assets/image1.png';

const NoteContainer = (props) =>{

    const reverseArray = (arr) =>{
        const array =[];
        for(let i=arr.length-1;i>=0;i--){
            array.push(arr[i])
        }
        console.log(array);
        return array;
    }
    
    const notes = reverseArray(props.notes);
    return(
        <div className="note-container">
            <h2>Welcome to PostItAll. . .</h2>
            <div className="note-container-notes custom-scroll">
                {notes.length >0 ? notes.map((note)=>(
                    <Note key={note.id} note={note} deleteNote={props.deleteNote} updateText={props.updateText} />
                )): <img src={defaultNote} />}
            </div>
        </div>    
    )
}

export default NoteContainer;