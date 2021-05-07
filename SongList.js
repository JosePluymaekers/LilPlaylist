import React from "react";
import "./styles/styles.css";

const SongList = (props) => {
  return (
    <div style={{ maxWidth: "70%", margin: "0 auto" }} id="songTable">
      <table style={{ width: "100%", marginTop: "5em" }}>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
        {props.songs.map((song, index) => {
          return (
            <tr key={index}>
              <td>{song.title}</td>
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
