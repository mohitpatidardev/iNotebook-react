import React, { useContext } from 'react'
import notesContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(notesContext);
    const { deleteNote } = context;
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3" >
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description}</p>
                    <i class="fa-sharp fa-solid fa-pen-to-square mx-2"></i>
                    <i class="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem