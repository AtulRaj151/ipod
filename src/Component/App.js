import React from "react";
import "../index.css";
import ZingTouch from "zingtouch";
import MainScreen from "./screen/MainScreen";

class App extends React.Component {
  // constructor
  constructor() {
    super();
    this.rotateGesture = this.rotateGesture.bind(this);
    // state
    this.state = {
      isMenuCoverflow: false,
      isMenuMusic: false,
      isMenuGames: false,
      isMenuSetting: false,

      isMenuSongs: false,
      isMenuAlbum: false,
      isMenuArtist: false,
      isMenuPlaylist: false,

      isMainScreen: true,
      isMusicScreen: false,
      isPlay: false,
      isPause: false,
    };
  }
  // select the main screen options and set its flag
  selectOptionMain = (event) => {
    console.log("Main");
    this.setState({
      isMainScreen: false,
    });

    if (this.state.isMenuMusic === true) {
      this.setState({
        isMusicScreen: true,
      });
    }
  };

  //  select the sub music menu option and set its flag
  selectOptionMusic = (event) => {
    this.setState({
      isMusicScreen: false,
    });
  };

  // zingtouch library for rotating the wheel

  rotateGesture = (event) => {
    // console.log(this);
    let self = this;
    var changeMenuCounter = 0;
    // binding the area
    let activeRegion = new ZingTouch.Region(document.getElementById("wrapper"));
    let myelement = document.getElementById("circle");
    if (event.target.id == "circle") {
      activeRegion.unbind(document.getElementById("smallcircle"));
      activeRegion.bind(
        myelement,
        "rotate",
        function (e) {
          let distance = e.detail.distanceFromLast;

          //show only when mainScreen
          if (self.state.isMainScreen === true) {
            if (distance > 0) {
              if (changeMenuCounter < 10 && changeMenuCounter >= 0) {
                self.setState({
                  isMenuCoverflow: true,
                  isMenuMusic: false,
                  isMenuGames: false,
                  isMenuSetting: false,
                });
              } else if (changeMenuCounter < 20 && changeMenuCounter >= 10) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuMusic: true,
                  isMenuGames: false,
                  isMenuSetting: false,
                });
              } else if (changeMenuCounter < 30 && changeMenuCounter >= 20) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuMusic: false,
                  isMenuGames: true,
                  isMenuSetting: false,
                });
              } else if (changeMenuCounter < 40 && changeMenuCounter >= 30) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuMusic: false,
                  isMenuGames: false,
                  isMenuSetting: true,
                });
              }

              if (changeMenuCounter > 30) {
                changeMenuCounter = 30;
              } else {
                changeMenuCounter++;
              }
            } else {
              if (changeMenuCounter < 10 && changeMenuCounter >= 0) {
                self.setState({
                  isMenuCoverflow: true,
                  isMenuMusic: false,
                  isMenuGames: false,
                  isMenuSetting: false,
                });
              } else if (changeMenuCounter < 20 && changeMenuCounter >= 10) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuMusic: true,
                  isMenuGames: false,
                  isMenuSetting: false,
                });
              } else if (changeMenuCounter < 30 && changeMenuCounter >= 20) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuMusic: false,
                  isMenuGames: true,
                  isMenuSetting: false,
                });
              } else if (changeMenuCounter < 40 && changeMenuCounter >= 30) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuMusic: false,
                  isMenuGames: false,
                  isMenuSetting: true,
                });
              }

              if (changeMenuCounter < 0) {
                changeMenuCounter = 0;
              } else {
                changeMenuCounter--;
              }
            }
          } // perform rotate gesture only if mainScreen is true

          // appy gesture on music
          if (self.state.isMusicScreen === true) {
            if (distance > 0) {
              if (changeMenuCounter < 10 && changeMenuCounter >= 0) {
                self.setState({
                  isMenuSongs: true,
                  isMenuAlbum: false,
                  isMenuArtist: false,
                  isMenuPlaylist: false,
                });
              } else if (changeMenuCounter < 20 && changeMenuCounter >= 10) {
                self.setState({
                  isMenuSongs: false,
                  isMenuAlbum: true,
                  isMenuArtist: false,
                  isMenuPlaylist: false,
                });
              } else if (changeMenuCounter < 30 && changeMenuCounter >= 20) {
                self.setState({
                  isMenuSongs: false,
                  isMenuAlbum: false,
                  isMenuArtist: true,
                  isMenuPlaylist: false,
                });
              } else if (changeMenuCounter < 40 && changeMenuCounter >= 30) {
                self.setState({
                  isMenuSongs: false,
                  isMenuAlbum: false,
                  isMenuArtist: false,
                  isMenuPlaylist: true,
                });
              }

              if (changeMenuCounter > 30) {
                changeMenuCounter = 30;
              } else {
                changeMenuCounter++;
              }
            } else {
              if (changeMenuCounter < 10 && changeMenuCounter >= 0) {
                self.setState({
                  isMenuSongs: true,
                  isMenuAlbum: false,
                  isMenuArtist: false,
                  isMenuPlaylist: false,
                });
              } else if (changeMenuCounter < 20 && changeMenuCounter >= 10) {
                self.setState({
                  isMenuSongs: false,
                  isMenuAlbum: true,
                  isMenuArtist: false,
                  isMenuPlaylist: false,
                });
              } else if (changeMenuCounter < 30 && changeMenuCounter >= 20) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuAlbum: false,
                  isMenuArtist: true,
                  isMenuPlaylist: false,
                });
              } else if (changeMenuCounter < 40 && changeMenuCounter >= 30) {
                self.setState({
                  isMenuCoverflow: false,
                  isMenuAlbum: false,
                  isMenuArtist: false,
                  isMenuPlaylist: true,
                });
              }

              if (changeMenuCounter < 0) {
                changeMenuCounter = 0;
              } else {
                changeMenuCounter--;
              }
            }
          } // perform rotate gesture only if MusicScreen is true
        },
        false
      );
    }
  };
  // enable and disable menu screen and music screen flag
  handleMenuButton = (e) => {
    if (this.state.isMusicScreen === false && this.state.isMenuMusic === true) {
      this.setState({
        isMusicScreen: true,
      });
    } else {
      this.setState({
        isMainScreen: true,
      });
    }
  };

  // handling event for play and pause button
  handlePlayPause = (e) => {
    let audio = document.getElementById("audio-player");
    console.log("audio", audio.controller);
    if (this.state.isPlay === false) {
      audio.play();
      this.setState({
        isPlay: true,
        isPause: false,
      });
    } else {
      audio.pause();
      this.setState({
        isPause: true,
        isPlay: false,
      });
    }
  };

  // forward seeking using buttons
  handleForwardSeek = () => {
    if (this.state.isPlay === true) {
      let audio = document.getElementById("audio-player");

      audio.currentTime = audio.currentTime + 1;
    }
  };

  // backward seeking using backward button
  handleBackwardSeek = () => {
    if (this.state.isPlay === true) {
      let audio = document.getElementById("audio-player");
      audio.currentTime = audio.currentTime - 1;
    }
  };

  //rendring the components
  render() {
    return (
      <div className="main">
        {/* main screen which is is the first desktop layer */}
        <MainScreen
          state={this.state}
          rotateGesture={this.rotateGesture}
          selectOptionMain={this.selectOptionMain}
          selectOptionMusic={this.selectOptionMusic}
          handleMenuButton={this.handleMenuButton}
          handlePlayPause={this.handlePlayPause}
          handleForwardSeek={this.handleForwardSeek}
          handleBackwardSeek={this.handleBackwardSeek}
        />
      </div>
    );
  }
}

export default App;
