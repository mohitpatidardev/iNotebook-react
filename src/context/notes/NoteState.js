import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYTY1ZTFhYTlmMjUyMjM5NzU2ZTYwIn0sImlhdCI6MTY5MDExNzg5M30.yO4aTd58MpQG3vxdWvPkOsTP91a_JiXIm2q370SPdzo"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Notes
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYTY1ZTFhYTlmMjUyMjM5NzU2ZTYwIn0sImlhdCI6MTY5MDExNzg5M30.yO4aTd58MpQG3vxdWvPkOsTP91a_JiXIm2q370SPdzo"
      },
      body: JSON.stringify({title, description, tag})
    });
     

    console.log("Adding a new note")
    const note = {
      "_id": "64bd32ee891f61e5ce2648a5",
      "user": "64ba65e1aa9f252239756e60",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote =  async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYTY1ZTFhYTlmMjUyMjM5NzU2ZTYwIn0sImlhdCI6MTY5MDExNzg5M30.yO4aTd58MpQG3vxdWvPkOsTP91a_JiXIm2q370SPdzo"
      }
    });
    const json = response.json();
    console.log(json);


    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiYTY1ZTFhYTlmMjUyMjM5NzU2ZTYwIn0sImlhdCI6MTY5MDExNzg5M30.yO4aTd58MpQG3vxdWvPkOsTP91a_JiXIm2q370SPdzo"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;