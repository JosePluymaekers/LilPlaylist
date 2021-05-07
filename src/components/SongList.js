import React, { useState } from "react";

const SongList = (title, artist, genre, rating) => {
  const [songs, setSongs] = useState([]);

  const addSongs = () => {
    setSongs([
      ...songs,
      { title: title, artist: artist, genre: genre, rating: rating },
    ]);
  };
  return (
    <div style={{ maxWidth: "70%", margin: "0 auto" }} id="songTable">
      <table style={{ width: "100%", marginTop: "5em" }}>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
        {songs.map((song) => {
          return (
            <tr>
              <td>{songs.song.title}</td>
              <td>{song.artist}</td>
              <td>{song.genre}</td>
              <td>{song.rating}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default SongList;
