import {useQuery} from '@apollo/client'
import {ALL_MOVIE} from './graphql-queries'

export const useMovies = ()=>{
    const result = useQuery(ALL_MOVIE)
    return result
     
  }