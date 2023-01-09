import React from "react";
import { useState } from "react";
import "./styles.css";

const movieDB = {
  Action: [
    {
      name: "John Wick",
      rating: 7
    },
    {
      name: "Top Gun: Maverick",
      rating: 9.2
    },
    {
      name: "The Dark Knight",
      rating: 10
    }
  ],
  "Sci-Fi": [
    {
      name: "Intersteller",
      rating: 8.4
    },
    {
      name: "The Martian",
      rating: 8
    },
    {
      name: "Dune",
      rating: 7.1
    }
  ],
  Fantasy: [
    {
      name: "Lord of the Rings",
      rating: 7.8
    },
    {
      name: "Narnia",
      rating: 7.1
    },
    {
      name: "Jurassic Park",
      rating: 8.3
    }
  ]
};

export default function App() {
  const [movie, setMovie] = useState("Action");
  function onClickRecommend(genre) {
    setMovie(genre);
  }
  return (
    <div className="App">
      <nav>
        <h1>What to Watch Today?</h1>
      </nav>
      <div>
        <h3>
          Select your genre and we will recommend you with some good movies:
        </h3>
        {Object.keys(movieDB).map((genre) => (
          <button className="genre" onClick={() => onClickRecommend(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="recomend">
        <ul className="list">
          {movieDB[movie].map((movies) => (
            <li className="items">
              <div>Name: {movies.name}</div>
              <div>Ratings: {movies.rating}/10</div>
            </li>
          ))}
        </ul>
      </div>
      <a
        className="source"
        href="https://github.com/archit-rohal/markSix_minion-speak"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </a>
    </div>
  );
}
