import songs from "../../../assets/songs/dum_dee_dum.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import React, { Component } from "react";

class Songs extends Component {
  render() {
    return (
      <div>
        <img
          className="music-icon"
          src="https://image.flaticon.com/icons/svg/1077/1077185.svg"
        />
        <audio controls id="audio-player">
          <source src={songs}></source>
        </audio>
      </div>
    );
  }
}

export default Songs;
