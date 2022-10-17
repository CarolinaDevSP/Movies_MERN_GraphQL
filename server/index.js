
import resolvers from './resolvers.js'
import { ApolloServer } from "apollo-server";
import typeDefinitions from './schema.js'
//import './dbConect'
//import Movie from './models/movie'

const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
})

server.listen({port: 4400}).then(({port}) =>{
    console.log(`SERVIDOR CORRIENDO EN PUERTO ${port}`);
})
