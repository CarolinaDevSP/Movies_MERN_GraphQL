import { gql } from 'apollo-server';

const typeDefinitions = gql`
    type Category{
        idCategory:String
        nameCategory:String
    }

   type Movie{
        _id:ID!
        image: String!
        title: String!
        rating: String
        description:String!
        slug:String!
        like:String
        category:Category # indicms que un Movie puede tener 1 tipo categoria
        client: String
      
  }

  type Query{
        movieCount: Int!
        allMovies: [Movie]!
        findMovie(title: String!): Movie
  }

  type Mutation {
    addMovie(
        image: String!
        title: String!
        rating: String
        description:String!
        slug:String!
        like:String
        client: String
     
        idCategory:String
        nameCategory:String 
    ): Movie

    editMovie(
        id: ID
        title:String
        ): Movie

    updateMovie (id: ID ): Movie
    deleteMovie(id: ID): [Movie]

  }

`;

export default typeDefinitions