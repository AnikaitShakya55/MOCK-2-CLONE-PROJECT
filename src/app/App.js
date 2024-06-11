import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import './App.css'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import MovieDetails from '../Components/MovieList/MovieDetails'
import YoutubeModal from '../Components/MovieList/YoutubeModal'
import HomePage from '../routes/HomePage'

const App = () => {


  return (
    <div className='background'>  
       <NavBar/>
        
        <main>

          <Route path='/' exact><Redirect to='/movie' /></Route>
          <Route path='/movie' exact><HomePage/></Route>
          <Route path='/movie/:movieId' exact><MovieDetails/></Route>
          <Route path='/movie/:movieId/:url'><YoutubeModal/></Route>


        </main>


    </div>
  )
}

export default App
