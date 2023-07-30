import React, { useState , useContext } from 'react'
import notesContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(notesContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"" , description:"" , tag:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      }
      

  return (
    <div>
            <h1>Add Your notes </h1>
      <form className='my-3'>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" onChange={onChange} id="title" name="title" aria-describedby="emailHelp" />
        </div>


        <div className="mb-3">
          <label htmlFor="description" className="form-label">Note</label>
          <input type="text" className="form-control" onChange={onChange} id="description" name="description" />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" onChange={onChange} id="tag" name="tag" />
        </div>


        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default AddNote
