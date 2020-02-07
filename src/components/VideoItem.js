import './VideoItem.css'
import React from 'react';

const VideoItem = ({video, onVideoSelect}) =>{ //onVideoSelect has been passed down from App, to Videolist, to here. Any onClick event is passed back up to App
return (
<div onClick={() => onVideoSelect(video)} className="video-item item">
    <img className="ui image" src={video.snippet.thumbnails.medium.url} />
    <div className="content">
        <div className="header">
            {video.snippet.title}
        </div>
    </div>
</div>
)
}

export default VideoItem;