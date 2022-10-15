import {gql} from '@apollo/client'

export const ALL_MOVIE = gql`
query {
  allMovies{
      id
      image
      title
      description
      like
         }
}`