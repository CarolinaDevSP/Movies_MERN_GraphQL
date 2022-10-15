
import {gql} from '@apollo/client'

export const CREATE_MOVIE = gql`
mutation createMovie( $image: String!, $title: String!, $rating: String, $description: String!, $slug: String!, $like: String, $client: String, $idCategory: String, $nameCategory: String ){
    addMovie( 
    image: $image
    title: $title
    rating: $rating
    description: $description
    slug: $slug
    like: $like
    client: $client
   
    idCategory: $idCategory
    nameCategory: $nameCategory

    ) {
    image
    title
    description
    like  
    }       
}
`

export const EDIT_MOVIE = gql `
    mutation editMovie($id:ID!, $title:String!){
        editMovie (id: $id, title: $title){
            title
            image
            description
            like
            id
        }
    }
`