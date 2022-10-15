import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient	, HttpLink, gql, InMemoryCache, ApolloProvider} from '@apollo/client'

//iniciamos el cliente, para hacer peticiones a nuestro servidor de graphql
const client = new ApolloClient({ 
   connectToDevTools:true,
   cache: new InMemoryCache(),
   link: new HttpLink({
    uri: 'http://localhost:4400'
   })
  })

  
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider >
)
