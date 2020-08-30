import React from "react";
import "./screen.css";

function Screen(props) {
  // console.log(props.menu);
  const { menu } = props;

  return (
    <div>
      <ol className="menu" id="menu">
        <li
          id="mn-songs"
          className={`menu-item ${menu.isMenuCoverflow ? "active" : ""}`}
        >
          CoverFlow
        </li>
        <li
          id="mn-album"
          className={`menu-item ${menu.isMenuMusic ? "active" : ""}`}
        >
          Music
        </li>
        <li
          id="mn-artist"
          className={`menu-item ${menu.isMenuGames ? "active" : ""}`}
        >
          Games
        </li>
        <li
          id="mn-playlist"
          className={`menu-item ${menu.isMenuSetting ? "active" : ""}`}
        >
          Setting
        </li>
      </ol>
    </div>
  );
}
export default Screen;
