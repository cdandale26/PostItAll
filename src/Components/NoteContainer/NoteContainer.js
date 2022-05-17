import React from 'react';
import Note from '../Note/Note';
import './NoteContainer.css'

const NoteContainer = () =>{
    
    return(
        <div className="note-container">
            <h2>Welcome to PostItAll. . .</h2>
            <div className="note-container-notes custom-scroll">
            <Note 
                note={{
                    text:'This is dummy sticky note.Need to make them dynamic',
                    time:'4:32PM',
                    color: 'hotpink'
                }}
            />
            <Note 
                note={{
                    text:'This is dummy sticky note.Need to make them dynamic',
                    time:'4:32PM',
                    color: 'hotpink'
                }}
            />
            <Note 
                note={{
                    text:'This is dummy sticky note.Need to make them dynamic',
                    time:'4:32PM',
                    color: 'hotpink'
                }}
            />
            <Note 
                note={{
                    text:'This is dummy sticky note.Need to make them dynamic',
                    time:'4:32PM',
                    color: 'hotpink'
                }}
            />
            <Note 
                note={{
                    text:'This is dummy sticky note.Need to make them dynamic',
                    time:'4:32PM',
                    color: 'hotpink'
                }}
            />
            <Note 
                note={{
                    text:'This is dummy sticky note.Need to make them dynamic',
                    time:'4:32PM',
                    color: 'hotpink'
                }}
            />

            </div>
        </div>
        
    )
}

export default NoteContainer;