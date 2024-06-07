import React, { useEffect, useState } from 'react';

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

    return (
        <div>
            <div>
            {
                    movieData.Search && movieData.Search.map((movie) => (
                        <li key={movie.imdbID}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <p>{movie.Title} ({movie.Year})</p>
                        </li>
                    ))
                }
            </div>
        </div>
    );
}

export default FetchMovies;
