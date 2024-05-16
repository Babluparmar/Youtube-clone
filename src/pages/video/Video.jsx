import React from 'react'
import './Video.css'
import PlayVideo from '../../components/playVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
// import PlayVideo from '../../components/playVideo/PlayVideo'


const Video = () => {

   const {videoId, categoryId} = useParams()

  return (
    <div className='video-container'>
    {/* <PlayVideo /> */}
      <PlayVideo videoId={videoId} categoryId= {categoryId}/>
      <Recommended />
    </div>
  )
}

export default Video