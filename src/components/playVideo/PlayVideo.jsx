import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
// import video1 from '../../assets/video1.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'


const PlayVideo = ({videoId, categoryId}) => {

   const [apiData, setApiData] = useState(null)

   const fetchData = async () =>{
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    await fetch(videoList_url).then(response=>response.json()).then(apiData=>setApiData(apiData.items))

}

useEffect(() => {
 fetchData()
}, [categoryId])


//    const fetchVideoData = async () =>{
//     // fetching videos data
//     // const videoDetails_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${videoId}key=${API_KEY}`

//     const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${videoId}&key=${API_KEY}`

//     // await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0])); 
//     await fetch(videoDetails_url)
//     .then(res => res.json())
//     .then(data => {
//         if (data && data.items && data.items.length > 0) {
//             setApiData(data.item[0]);
//         } else {
//             // Handle the case when data.items is undefined or empty
//             console.error("Data items are undefined or empty");
//         }
//     })
//     .catch(error => {
//         // Handle fetch or JSON parsing errors
//         console.error("Error fetching or parsing data:", error);
//     });  
//     console.log(videoDetails_url);
//    }

//    useEffect(() => {
//     fetchVideoData();
//    }, [])
   

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{item.snippet.title}</h3>
        {/* {console.log(apiData?apiData.snippet.title:"Title Here")} */}
        <div className="play-video-info">
            <p>{apiData?apiData.statistics.viewCount:" 16K"} views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Bablu ji</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscriber</button>
        </div>
        <div className="vid-discription">
            <p>Channel that makes learning easy</p>
            <p>Subscriber Bablu ji to whatch more tutorials on wed development</p>
            <hr />
            <h4>130 Comments</h4>
           <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bablu parmar <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, tempora!</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />

                </div>
            </div>
           </div>
           <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bablu parmar <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, tempora!</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />

                </div>
            </div>
           </div>
           <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bablu parmar <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, tempora!</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />

                </div>
            </div>
           </div>
           <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bablu parmar <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, tempora!</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />

                </div>
            </div>
           </div>
           <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bablu parmar <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, tempora!</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />

                </div>
            </div>
           </div>
           <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Bablu parmar <span>1 day ago</span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, tempora!</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />

                </div>
            </div>
           </div>
        </div>
        </div>
  )
}

export default PlayVideo