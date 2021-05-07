import React, { useState } from "react";

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
      <div>
        <SongForm addsong={addSong} />
        <SongList songs={songs} />
      </div>
    </div>
  );
}

export default SongOverview;
