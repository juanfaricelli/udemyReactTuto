import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoId = video.id.videoId;
  // const videoUrl = 'http://www.youtube.com/embed/' + videoId;
  // on ES6
  const videoUrl = `http://www.youtube.com/embed/${videoId}`;
  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}/>
      </div>
      <div className="details">
        <div>{videoTitle}</div>
        <div>{videoDescription}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
