import React, {useState} from "react"
import { useMutation} from '@apollo/client'
import {CREATE_MOVIE} from './movies/graphql-mutations'
import { ALL_MOVIE } from './movies/graphql-queries'

export const MovieForm = ({notifyError}) => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [slug, setSlug] = useState('')
    const [like, setLike] = useState('')
    const [client, setClient] = useState('')
    
    const [idCategory, setIdCategory] = useState('')
    const [nameCategory, setNameCategory] = useState('')


    const [createMovie] = useMutation(CREATE_MOVIE, {
        refetchQueries: [{query: ALL_MOVIE}],
        onError: (error) =>{
            notifyError(error.graphQLErrors[0].message)
        }
    })
    
    const handleSubmit = e =>{
        e.preventDefault()

        createMovie({ variables: { image, title, rating, description, slug, like, client, idCategory, nameCategory}})

        setImage('')
        setTitle('')
        setRating('')
        setDescription('')
        setSlug('')
        setLike('')
        setClient('')
       
        setIdCategory('')
        setNameCategory('')
    }
    return (
        <div>
            <h4>Crear nueva pelicula</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder='image' value={image} onChange={ evt => setImage(evt.target.value)}/>
                <input placeholder='title' value={title} onChange={ evt => setTitle(evt.target.value)}/>
                <input placeholder='rating' value={rating} onChange={ evt => setRating(evt.target.value)}/>
                <input placeholder='description' value={description} onChange={ evt => setDescription(evt.target.value)}/>
                <input placeholder='slug' value={slug} onChange={ evt => setSlug(evt.target.value)}/>
                <input placeholder='like' value={like} onChange={ evt => setLike(evt.target.value)}/>
                <input placeholder='client' value={client} onChange={ evt => setClient(evt.target.value)}/>
               
                <input placeholder='idCategory' value={idCategory} onChange={ evt => setIdCategory(evt.target.value)}/>
                <input placeholder='nameCategory' value={nameCategory} onChange={ evt => setNameCategory(evt.target.value)}/>
                <button>AGREGAR </button>

                
            </form>
        </div>
    )
}