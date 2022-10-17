//import {movies}  from "./database.js"
import {v1 as uuid} from 'uuid'
import { UserInputError } from "apollo-server"
import './dbConect.js'
import Movie from './models/movie.js'


//metodos que van a resolver mis datos del schema
const resolvers = {
    Query: {
        //movieCount: () => movies.length,
        movieCount: () => Movie.collection.countDocuments(),

        //allMovies: () => movies,
        allMovies: async (root,args) => {
            return Movie.find({})
        },

        findMovie: async (root,args) =>{
            const { title } = args
            //return movies.find(movie =>movie.title === title)
            return await Movie.findOne({ title })

        }
        

        
    },

    Mutation: {
        
        addMovie: (root, args) => {

            /*
            //haciendo validaciones
            if( movies.find(mv => mv.title ===args.title)){
                throw new UserInputError('el titulo debe ser unico', {
                    invalidArgs: args.title
                })
            }*/
            const movie = new Movie({...args})
            return movie.save()

            /*
            const movie = {...args,id:uuid()}
            movies.push(movie)
            return movie
            */
        },

        editMovie: async(root, args) =>{
            /*
            const movieIndex = movies.findIndex(mv => mv.id === args.id)
            if (movieIndex === -1) return null
            const movie = movies[movieIndex]
            const updatedMovie2 = { ...movie, title: args.title }
            movies[movieIndex]=updatedMovie2
            return updatedMovie2
            */
           const movie = await Movie.findOne({ _id: args.id})
           if(!movie) return
                movie.title = args.title
            try{
                await movie.save()
            } catch (error){
                throw new UserInputError(error.message, {
                    invalidArgs: args
                })
            }
           return movie
            /** const movie = await Movie.findOne({ _id: args.id})
                movie.title = args.title
                return movie.save() */

        },



        //encuentra el obj setea
        updateMovie: ( _,{ id, title }) =>{
        movies.map( movie => {
            if (movie.id == id) {
                movie.title = title;
                return movie
            }
        })
       //retorna el id
        return movies.filter( movie => movie.id == id)[0]
             },


        deleteMovie :(_,{id}) =>{
                let movieId = id;
                //find de index, encontramos el indice
                //const getIndex = courses.indexOf({id : courseId})
                var index = movies.findIndex (x => id === movieId)
                //console.log(getIndex);
                movies.splice (index ,1)
                //removemos el objeto
                return movies
                //retornamos la lista []
            }
    },

    
    //formamos un grupo llamado categoria con los datos ya ingresados en movie
     Movie:{
        category: (root) => {
            return{
                idCategory: root.idCategory,
                nameCategory: root.nameCategory,

            }
        }
        
     }
}



export default resolvers


