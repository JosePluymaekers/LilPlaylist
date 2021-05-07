import React, { useState } from "react";

function SongForm({ addSongs }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addSongs([title, artist, genre, rating]);
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
// const SongForm = ({ setInputText, songs, setSongs, inputText }) => {
//   const inputTextHandler = (e) => {
//     setInputText(e.target.value);
//   };

// const submitSongHandler = (e) => {
//   e.preventDefault();
//   setSongs([
//     ...props,
//     {
//       title: title,
//       artist: artist,
//       genre: genre,
//       rating: rating,
//       id: songs.length + 1,
//     },
//   ]);
//   setTitle("");
// };

// // return (
//   <div id="Form">
//     <form>
//       <input
//         style={{ marginRight: "20px" }}
//         id="title"
//         type="text"
//         name="title"
//         value={inputText.title}
//         placeholder="Title"
//         onChange={inputTextHandler}
//       />
//       <input
//         style={{ marginRight: "20px" }}
//         id="artist"
//         type="text"
//         name="artist"
//         value={inputText.artist}
//         placeholder="Artist"
//         onChange={inputTextHandler}
//       />
//       <input
//         style={{ marginRight: "20px" }}
//         id="genre"
//         type="text"
//         name="genre"
//         value={inputText.genre}
//         placeholder="Genre"
//         onChange={inputTextHandler}
//       />

//     <label style={{ marginLeft: "20px" }}></label>
//     <select
//       id="rating"
//       name="rating"
//       value={inputText.rating}
//       onChange={inputTextHandler}
//     >
//       <option selected>Rating..</option>
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//       <option value="4">4</option>
//       <option value="5">5</option>
//     </select>
//     <button
//       onClick={handleSubmit}
//       style={{ marginLeft: "20px" }}
//       type="submit"
//       value="Submit"
//     >
//       Add To Playlist
//     </button>
//   </form>
// </div>

export default SongForm;
