import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage'
import './App.css'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import MovieDetails from './Components/MovieList/MovieDetails'

const App = () => {


  return (
    <>  
       <NavBar/>
        
        <main>

          <Route path='/' exact><Redirect to='/movie' /></Route>
          <Route path='/movie' exact><HomePage/></Route>
          <Route path='/movie/:movieId'><MovieDetails/></Route>


        </main>


    </>
  )
}

export default App
