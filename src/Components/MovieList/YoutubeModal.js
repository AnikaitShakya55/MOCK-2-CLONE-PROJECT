import React from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import ReactPlayer from 'react-player/youtube';
import styles from './YoutubeVideo.module.css'

const YoutubeModal = (props) => {
  
  const location = useLocation()
  const {movieData} = location.state || {}

  return (
    <>

<div className={styles.videoOverlay}>
                   <div className={styles.videoWrapper}>
                    <ReactPlayer
                    url={movieData.video}
                    playing={true}
                    controls={true}
                    loop={true}
                    muted={false}
                    className={styles.reactPlayer}
                    width="100%"
                    height="100%"
                    />
                   
                 </div>

                </div>
    

      
    </>
  )
}

export default YoutubeModal
