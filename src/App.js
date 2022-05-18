
import './App.css';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import Sidebar from './Components/Sidebar/Sidebar';
import {useState, useEffect} from 'react'

function App() {
  const [notes,setNotes] =useState(JSON.parse(localStorage.getItem('notes-app')) || []);

  const addNote = (color) =>{
    const tempNotes =[...notes];
    
    tempNotes.push({
        id:Date.now()+""+Math.floor(Math.random()*78),
        text:"",
        time:Date.now(),
        color,
      }
    )
    setNotes(tempNotes);
  }

  const deleteNote = (id) =>{
    const tempNotes =[...notes];
    let newNotes = tempNotes.filter(element => element.id !== id);
    setNotes(newNotes);
  }

  useEffect(() => {
    localStorage.setItem('notes-app',JSON.stringify(notes))
  })

  const updateText = (text, id) =>{
    const tempNotes =[...notes];
    const index= tempNotes.findIndex((item) => item.id === id);
    if(index < 0) return ;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  }

  return (
    <div className="App">  
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote} updateText={updateText}/>
    </div>
  );
}

export default App;
