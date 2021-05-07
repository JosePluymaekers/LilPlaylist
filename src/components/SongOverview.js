import React, { useState } from "react";

import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview(props) {
  const [songs, setSongs] = useState([]);
  const addSongs = (song) => {
    let songs = [...props, song];
    setSongs(songs);
  };

  return (
    <div>
      <div>
        <SongForm addSongs={addSongs} />
        <SongList songs={songs} />
      </div>
    </div>
  );
}

export default SongOverview;
