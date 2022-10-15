import React,{useState} from 'react'
import './App.css'
import { Movies } from './Movies'
import { MovieForm } from './MovieForm'
import {useMovies} from './movies/use-movies'
import {Notify} from './Notify'
import { EditForm } from './EditForm'

function App() {
  
  const {data,loading,error} = useMovies()
  const [errorMessage,setErrorMessage] = useState(null)

  if (error) return <span style='color: red'>{error}</span>

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(()=> setErrorMessage(null),5000)
  }

  return (  
    <div className="App">
       <nav className="light-pinl darken-4"> 
                <div className="container">
                    <a className="brand" href="/" >OURA MOVIES</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ADD MOVIE</a></li>
                        <li><a href="/">LOGIN</a></li>
                    </ul>
                </div>
            </nav>
            
      <Notify errorMessage={errorMessage}/>
      <header className='App-header'>
        
      <h3>CATALOGO DE PELICULAS</h3>
        {loading
         ? <p>Cargando....</p>
         : <Movies movies= {data?.allMovies}/>

        }
     <EditForm notifyError={notifyError}/>
     <MovieForm notifyError={notifyError}/>
     
      </header>
     
    </div>
  )
}

export default App
