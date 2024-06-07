import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './MovieDetails.module.css'

const MovieDetails = () => {
  
  const location = useLocation();
  const {movieData} = location.state || {};


  

  return (
    <>

            {movieData && (
                <div className={styles.detailContainer}>
                    <img className={styles.detailImg} src={movieData.Poster} alt={movieData.Title} />
                    <div className={styles.details}>
                        <h1 className={styles.detailh1}>{movieData.Title}</h1>
                        <div className={styles.detailInfo}>
                            <p className={styles.detailp} data-label="Year:">{movieData.Year}</p>
                            <p className={styles.detailp} data-label="Type:">{movieData.Type}</p>
                        </div>
                    </div>
                </div>
            )}
      
    </>
  )
}

export default MovieDetails
