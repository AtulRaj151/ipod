import React from "react";

function MusicScreen(props) {
  const { menu } = props;
  return (
    <div>
      <ol className="menu" id="menu">
        <li
          id="mn-songs"
          className={`menu-item ${menu.isMenuSongs ? "active" : ""}`}
        >
          Songs
        </li>
        <li
          id="mn-album"
          className={`menu-item ${menu.isMenuAlbum ? "active" : ""}`}
        >
          Albums
        </li>
        <li
          id="mn-artist"
          className={`menu-item ${menu.isMenuArtist ? "active" : ""}`}
        >
          Artist
        </li>
        <li
          id="mn-playlist"
          className={`menu-item ${menu.isMenuPlaylist ? "active" : ""}`}
        >
          PlayList
        </li>
      </ol>
    </div>
  );
}

export default MusicScreen;
