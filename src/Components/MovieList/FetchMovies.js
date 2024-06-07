import React, { useEffect, useState } from 'react';
import styles from './FetchMovies.module.css'

const FetchMovies = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?s=thor&page=1&apikey=1a65c31&', {
            method: 'GET'
        })

        .then((res) => {
            if(res.ok) {
                console.log(movieData)
                return res.json();
            } else {
                throw new Error("ERROR WHILE FETCHING");
            }
        })
        .then((data) => {
            console.log(data)
            setMovieData(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);



    const imageHandler = movie=>{
            
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
