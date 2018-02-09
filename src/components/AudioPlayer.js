import React from 'react'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src="http://freesound.org/data/previews/367/367160_2305278-lq.mp3" controls autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer;
