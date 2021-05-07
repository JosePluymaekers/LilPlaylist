import React, { useState } from "react";
import "./styles/styles.css";

import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview() {
  const [songs, setSongs] = useState([]);
  const addSong = (song) => {
    const newSongList = [...songs, song];
    setSongs(newSongList);
  };
  return (
    <div>
      <header className="header">Mijn playlist</header>
      <div>
        <SongForm addSong={addSong} />
        <SongList songs={songs} />
      </div>
    </div>
  );
}
export default SongOverview;
