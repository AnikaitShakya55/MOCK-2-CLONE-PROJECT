import React, { useEffect, useState } from 'react';
import styles from './FetchMovies.module.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FetchMoviesApi } from '../../api/api';

const FetchMovies = () => {
    const [movieData, setMovieData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        
    FetchMoviesApi('http://www.omdbapi.com/?s=thor&page=1&apikey=1a65c31&')
    .then((data)=> setMovieData(data))       
       
      
    }, []);



    const imageHandler = movie=>{
            history.push({
                pathname: `/movie/${movie.imdbID}`,
                state:{movieData:movie},
            })
    }

    return (
        <div>
            <ul className={styles.movieUl}>
            {
                    movieData.Search && movieData.Search.map((movie) => (
                        <li key={movie.imdbID} className={styles.movieLi}>
                            <img className={styles.movieImg} src={movie.Poster} alt={movie.Title} onClick={()=> imageHandler(movie)} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FetchMovies;
