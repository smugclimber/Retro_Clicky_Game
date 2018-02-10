import React from 'react'
import "./AudioPlayer.css";

class AudioPlayer extends React.Component {
  render()
  {
    return (
      <div>
        <audio ref="audio_tag" src="http://freesound.org/data/previews/367/367160_2305278-lq.mp3" loop autoPlay>
        The audio tag is not supported by your browser.</audio>
        <img className="spinner" src='./react.ico' alt='React img missing'/>
        <span>Made with React!</span>
        <p><strong>Note:</strong> Original track by Frankum & Frankumjay.</p>
      </div>
    );
  }
}

export default AudioPlayer;
