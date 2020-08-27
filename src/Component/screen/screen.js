import React from "react";
import "./screen.css";

function Screen(props) {
  console.log(props.menu);
  const { menu } = props;

  return (
    <div className="screen-container">
      <ol className="menu" id="menu">
        <li
          id="mn-songs"
          className={`menu-item ${menu.isMenuSongs ? "active" : ""}`}
        >
          <a>Songs</a>
        </li>
        <li
          id="mn-album"
          className={`menu-item ${menu.isMenuALbum ? "active" : ""}`}
        >
          <a>Albums</a>
        </li>
        <li
          id="mn-artist"
          className={`menu-item ${menu.isMenuPlaylist ? "active" : ""}`}
        >
          <a>Artist</a>
        </li>
        <li
          id="mn-playlist"
          className={`menu-item ${menu.isMenuArtist ? "active" : ""}`}
        >
          <a>Playlist</a>
        </li>
      </ol>
    </div>
  );
}
export default Screen;
