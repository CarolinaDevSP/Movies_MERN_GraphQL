import React from "react"
import {gql, useLazyQuery} from '@apollo/client'
import { useState } from "react"
import { useEffect } from "react"

const FIND_MOVIE = gql `
    query findMovieByTitle($titleToSearch: String!) {
        findMovie(title: $titleToSearch) {
            title
            id
            image
            description
            like
        }
    }

`
export const Movies = ({movies})=>{
    const [getMovie, result ] = useLazyQuery(FIND_MOVIE)
    const [movie, setMovie] = useState(null)

    const showMovie = title => {
        getMovie({variables: {titleToSearch: title}})
    }

    useEffect(() => {
        if(result.data){
            setMovie(result.data.findMovie)
        }
    }, [result])

    if (movie){
        return (
        <div>
            <h3>{movie.title}</h3>
            <div>{movie.image}</div>
            <div>{movie.like}</div>
            <button onClick={() => setMovie(null)}>close</button>
        </div>
        )
    }

    if(movies === null) return null

    return(
        <div>
            <h3> Peliculas</h3>
            {movies.map(mv => <div key={mv.id} onClick = {() => { showMovie(mv.title)}}>
                {mv.title} {mv.image}  {mv.like}    
            </div>
            )}
             <button>ELIMINAR </button>
        </div>
    )
}