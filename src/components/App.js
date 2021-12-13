import React, {useState, useEffect} from 'react'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import SearchBar from './SearchBar'
import useVideos from '../hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('rainbows')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onFormSubmit={search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail 
              video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList 
              videos={videos} 
              onVideoSelect={setSelectedVideo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 

//onVideoSelect={(video) =>setSelectedVideo(video)}/>
//can refactor this to onVideoSelect={setSelectedVideo} when same argument is passed directly into the fuction


// if you give me a 
//(list of inputs)[default search term], 
//I will give you 
//(list of outputs)[a way to search for videos] [a list of videos]