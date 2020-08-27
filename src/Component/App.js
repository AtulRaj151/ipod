import React from "react";
import "../index.css";
import ZingTouch from "zingtouch";
import { Screen } from "./screen";
import { isElement } from "react-dom/test-utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuSongs: false,
      isMenuAlbum: false,
      isMenuPlaylist: false,
      isMenuArtist: false,
    };
  }
  selectOption = (event) => {
    console.log(event.target);
  };

  changeMenuItems = (fieldname, isActive) => {
    this.setState({
      ...this.state,
      [fieldname]: isActive,
    });
  };

  rotateGesture = (event) => {
    let activeRegion = new ZingTouch.Region(document.getElementById("wrapper"));
    let myelement = document.getElementById("circle");
    if (event.target.id == "circle") {
      activeRegion.unbind(document.getElementById("smallcircle"));
      activeRegion.bind(
        myelement,
        "rotate",
        function (e) {
          console.log(e.detail);
          let distance = e.detail.angle * e.detail.distanceFromLast;

          if (distance > 15) {
            this.setState({
              isMenuSongs: true,
              isMenuAlbum: false,
              isMenuPlaylist: false,
              isMenuArtist: false,
            });
          } else if (distance > 30) {
          } else if (distance > 45) {
          } else if (distance > 90) {
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
