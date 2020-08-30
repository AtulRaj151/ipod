import React from "react";
import "../index.css";
import ZingTouch from "zingtouch";
import { Screen } from "./screen";
import { isElement } from "react-dom/test-utils";

class App extends React.Component {
  constructor() {
    super();
    this.rotateGesture = this.rotateGesture.bind(this);
    this.state = {
      isMenuSongs: false,
      isMenuAlbum: false,
      isMenuPlaylist: false,
      isMenuArtist: false,
    };
  }
  selectOption = (event) => {
    // console.log(event.target);
  };

  // changeMenuItems = (fieldname, isActive) => {
  //   this.setState({
  //     ...this.state,
  //     [fieldname]: isActive,
  //   });
  // };

  rotateGesture = (event) => {
    // console.log(this);
    let self = this;
    var changeMenuCounter = 0;
    let activeRegion = new ZingTouch.Region(document.getElementById("wrapper"));
    let myelement = document.getElementById("circle");
    if (event.target.id == "circle") {
      activeRegion.unbind(document.getElementById("smallcircle"));
      activeRegion.bind(
        myelement,
        "rotate",
        function (e) {
          // console.log(e.detail);
          let distance = e.detail.distanceFromLast;
          console.log(e.detail.distanceFromLast);
          if (distance > 0) {
            if (changeMenuCounter < 10 && changeMenuCounter >= 0) {
              self.setState({
                isMenuSongs: true,
                isMenuAlbum: false,
                isMenuPlaylist: false,
                isMenuArtist: false,
              });
            } else if (changeMenuCounter < 20 && changeMenuCounter >= 10) {
              self.setState({
                isMenuSongs: false,
                isMenuAlbum: true,
                isMenuPlaylist: false,
                isMenuArtist: false,
              });
            } else if (changeMenuCounter < 30 && changeMenuCounter >= 20) {
              self.setState({
                isMenuSongs: false,
                isMenuAlbum: false,
                isMenuPlaylist: true,
                isMenuArtist: false,
              });
            } else if (changeMenuCounter < 40 && changeMenuCounter >= 30) {
              self.setState({
                isMenuSongs: false,
                isMenuAlbum: false,
                isMenuPlaylist: false,
                isMenuArtist: true,
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
                isMenuPlaylist: false,
                isMenuArtist: false,
              });
            } else if (changeMenuCounter < 20 && changeMenuCounter >= 10) {
              self.setState({
                isMenuSongs: false,
                isMenuAlbum: true,
                isMenuPlaylist: false,
                isMenuArtist: false,
              });
            } else if (changeMenuCounter < 30 && changeMenuCounter >= 20) {
              self.setState({
                isMenuSongs: false,
                isMenuAlbum: false,
                isMenuPlaylist: true,
                isMenuArtist: false,
              });
            } else if (changeMenuCounter < 40 && changeMenuCounter >= 30) {
              self.setState({
                isMenuSongs: false,
                isMenuAlbum: false,
                isMenuPlaylist: false,
                isMenuArtist: true,
              });
            }

            if (changeMenuCounter < 0) {
              changeMenuCounter = 0;
            } else {
              changeMenuCounter--;
            }
          }
        },
        false
      );
    }
  };

  render() {
    return (
      <div className="main">
        <Screen menu={this.state} />
        <div className="btn-container" id="btn-container">
          <div className="wrapper" id="wrapper">
            <div className="circle" id="circle" onClick={this.rotateGesture}>
              <div className="btn">
                <img
                  src="https://image.flaticon.com/icons/svg/1792/1792864.svg"
                  alt="btn-playpause"
                  id="btn-playpause"
                />
                <img
                  src="https://image.flaticon.com/icons/svg/1792/1792919.svg"
                  alt="btn-fastforward"
                  id="btn-fastforward"
                />
                <img
                  src="https://image.flaticon.com/icons/svg/1792/1792919.svg"
                  alt="btn-fastbackward"
                  id="btn-fastbackward"
                />
                <img
                  src="https://image.flaticon.com/icons/svg/643/643500.svg"
                  alt="btn-menu"
                  id="btn-menu"
                />
              </div>

              <div
                className="smallCircle"
                id="smallcircle"
                onClick={this.selectOption}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
