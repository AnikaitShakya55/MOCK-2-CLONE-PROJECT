import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage'
import './App.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import MovieDetails from './Components/MovieList/MovieDetails'

const App = () => {


  return (
    <>  
       <NavBar/>
        
        <main>

          <Route path='/'><HomePage/></Route>
          <Route path='/movie/:movieId'><MovieDetails/></Route>


        </main>


    </>
  )
}

export default App
