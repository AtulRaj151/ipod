import React, { Component } from "react";
import { Screen } from "./";
import Coverflow from "./Coverflow";
import Games from "./Games";
import MusicScreen from "./MusicScreen/MusicScreen";
import Setting from "./Setting";
import Songs from "./MusicScreen/Songs";
import Album from "./MusicScreen/Album";
import Artist from "./MusicScreen/Artist";
import Playlist from "./MusicScreen/Playlist";

class MainScreen extends Component {
  render() {
    const {
      rotateGesture,
      selectOptionMain,
      handleMenuButton,
      selectOptionMusic,
      handlePlayPause,
      handleForwardSeek,
      handleBackwardSeek,
    } = this.props;
    const {
      isMainScreen,
      isMenuCoverflow,
      isMenuMusic,
      isMenuGames,
      isMenuSetting,
      isMusicScreen,

      isMenuSongs,
      isMenuAlbum,
      isMenuArtist,
      isMenuPlaylist,
    } = this.props.state;

    return (
      <div className="screen-wrapper">
        {/* hide the  screen if user clicked any event */}
        <div className="screen-container">
          {isMainScreen && <Screen menu={this.props.state} />}
          {!isMainScreen && isMenuCoverflow && <Coverflow />}
          {!isMainScreen && isMenuMusic && isMusicScreen && (
            <MusicScreen menu={this.props.state} />
          )}
          {!isMainScreen && isMenuGames && <Games />}
          {!isMainScreen && isMenuSetting && <Setting />}

          {!isMainScreen && !isMusicScreen && isMenuSongs && (
            <Songs state={this.props.state} />
          )}
          {!isMainScreen && !isMusicScreen && isMenuAlbum && <Album />}
          {!isMainScreen && !isMusicScreen && isMenuArtist && <Artist />}
          {!isMainScreen && !isMusicScreen && isMenuPlaylist && <Playlist />}
        </div>

        <div className="btn-container" id="btn-container">
          <div className="wrapper" id="wrapper">
            <div className="circle" id="circle" onClick={rotateGesture}>
              <div className="btn">
                <img
                  src="https://image.flaticon.com/icons/svg/1792/1792864.svg"
                  alt="btn-playpause"
                  id="btn-playpause"
                  onClick={handlePlayPause}
                />
                <img
                  src="https://image.flaticon.com/icons/svg/1792/1792919.svg"
                  alt="btn-fastforward"
                  id="btn-fastforward"
                  onClick={handleBackwardSeek}
                />
                <img
                  src="https://image.flaticon.com/icons/svg/1792/1792919.svg"
                  alt="btn-fastbackward"
                  id="btn-fastbackward"
                  onClick={handleForwardSeek}
                />
                <img
                  src="https://image.flaticon.com/icons/svg/643/643500.svg"
                  alt="btn-menu"
                  id="btn-menu"
                  onClick={handleMenuButton}
                />
              </div>

              <div
                className="smallCircle"
                id="smallcircle"
                onClick={isMainScreen ? selectOptionMain : selectOptionMusic}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainScreen;
