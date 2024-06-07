import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './MovieDetails.module.css';
import ReactPlayer from 'react-player/youtube';


const MovieDetails = () => {
  
  const location = useLocation();
  const {movieData} = location.state || {};


  const videoData = [
    {imdbID: 'tt0800369',video: "https://www.youtube.com/watch?v=3v6kekEW3jM" },
    {imdbID: 'tt3501632',video: "https://www.youtube.com/watch?v=T2B2V33gDw4&pp=ygUUdGhvciBoZCAzMCBzZWMgY2xpcCA%3D"  },
    {imdbID: 'tt1981115',video : 'https://www.youtube.com/watch?v=9ekVHVO_Ij4&pp=ygUUdGhvciBoZCAzMCBzZWMgY2xpcCA%3D' },
    {imdbID: 'tt10648342',video: 'https://www.youtube.com/watch?v=g-uGYm8PJ00&pp=ygUUdGhvciBoZCAzMCBzZWMgY2xpcCA%3D'},
    {imdbID: 'tt6016776', video: "https://www.youtube.com/watch?v=31IKXEThKQ0&pp=ygUXdGhvciB2cyBodWxrIDEgbWluIGNsaXA%3D"},
    {imdbID: 'tt1667903',video:'https://www.youtube.com/watch?v=7uweolMqZPs&pp=ygUZYXZlbmdlcnMgaGQgc2NlbmVzIDEgbWluIA%3D%3D'},
    {imdbID: 'tt6599818',video: "https://www.youtube.com/watch?v=3v6kekEW3jM"},
    {imdbID: 'tt8956872',video: "https://www.youtube.com/watch?v=T2B2V33gDw4&pp=ygUUdGhvciBoZCAzMCBzZWMgY2xpcCA%3D" },
    {imdbID: 'tt1792794',video : 'https://www.youtube.com/watch?v=9ekVHVO_Ij4&pp=ygUUdGhvciBoZCAzMCBzZWMgY2xpcCA%3D' },
    {imdbID: 'tt8513006',video: 'https://www.youtube.com/watch?v=g-uGYm8PJ00&pp=ygUUdGhvciBoZCAzMCBzZWMgY2xpcCA%3D' }
];
  
 const uniqueVideo = videoData.find(video=> video.imdbID === movieData.imdbID)
 const youtubeUrl  = uniqueVideo.video
  console.log(youtubeUrl)

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
                              
                            {uniqueVideo && (
                                <div className={styles.videoWrapper}>
                                    <ReactPlayer url={uniqueVideo.video} controls />
                                </div>
                            )}



                        </div>
                    </div>
                </div>
            )}
      
    </>
  )
}

export default MovieDetails
