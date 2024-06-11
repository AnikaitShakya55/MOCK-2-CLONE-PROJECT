import React from 'react'
import FetchMovies from '../Components/MovieList/FetchMovies';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
        <h1 className={styles.headingh1}>GOD OF THUNDER</h1>
        <FetchMovies/>
      
    </div>
  )
}

export default HomePage
