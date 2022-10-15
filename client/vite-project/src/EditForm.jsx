import React, {useState} from "react"
import { useMutation} from '@apollo/client'
import {EDIT_MOVIE } from './movies/graphql-mutations'
import { useEffect } from "react"

export const EditForm = ({notifyError}) => {
    const [id, setID] = useState('')
    const [title, setTitle] = useState('')

    const [changeNumber, result]= useMutation(EDIT_MOVIE)
    useEffect(()=>{
        if(result.data && result.data.editMovie === null){
            console.error('pelicula no encontrada')
        }
    },[result.data])
    const handleSubmit = e =>{
        e.preventDefault()

        changeNumber({ variables: { id, title}})

        setID('')
        setTitle('')
        
    }
    return (
        <div>
            <h4>Editar pelicula</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder='id' value={id} onChange={ evt => setID(evt.target.value)}/>
                <input placeholder='title' value={title} onChange={ evt => setTitle(evt.target.value)}/>
                
                <button>ENVIAR </button>

                
            </form>
        </div>
    )
}