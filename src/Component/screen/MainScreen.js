import React, { Component } from "react";
import { Screen } from "./";
import Coverflow from "./Coverflow";
import Games from "./Games";
import MusicScreen from "./MusicScreen/MusicScreen";
import Setting from "./Setting";

class MainScreen extends Component {
  render() {
    const {
      rotateGesture,
      selectOptionMain,
      handleMenuButton,
      selectOptionMusic,
    } = this.props;
    const {
      isMainScreen,
      isMenuCoverflow,
      isMenuMusic,
      isMenuGames,
      isMenuSetting,
    } = this.props.state;

    return (
      <div>
        {/* hide the  screen if user clicked any event */}
        <div className="screen-container">
          {isMainScreen && <Screen menu={this.props.state} />}
          {!isMainScreen && isMenuCoverflow && <Coverflow />}
          {!isMainScreen && isMenuMusic && (
            <MusicScreen menu={this.props.state} />
          )}
          {!isMainScreen && isMenuGames && <Games />}
          {!isMainScreen && isMenuSetting && <Setting />}
        </div>

        <div className="btn-container" id="btn-container">
          <div className="wrapper" id="wrapper">
            <div className="circle" id="circle" onClick={rotateGesture}>
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
