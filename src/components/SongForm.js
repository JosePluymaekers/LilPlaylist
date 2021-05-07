import React, { useState } from "react";

function SongForm({ addSong }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong([title, artist, genre, rating]);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        style={{ marginRight: "20px" }}
        id="title"
        type="text"
        name="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        style={{ marginRight: "20px" }}
        id="artist"
        type="text"
        name="artist"
        placeholder="Artist"
        onChange={(e) => setArtist(e.target.value)}
        value={artist}
      />
      <input
        style={{ marginRight: "20px" }}
        id="genre"
        type="text"
        name="genre"
        placeholder="Genre"
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
      />
      <label style={{ marginLeft: "20px" }}></label>
      <select
        id="rating"
        name="rating"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      >
        <option selected>Rating..</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        onClick={handleSubmit}
        style={{ marginLeft: "20px" }}
        type="submit"
        value="add song"
      >
        Add To Playlist
      </button>
    </form>
  );
}

export default SongForm;
