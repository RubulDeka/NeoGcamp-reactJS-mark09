import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Action: [
    { name: "Dying Light 2", rating: "7.9/10" },
    { name: "Elden Ring", rating: "9.5/10" }
  ],

  Adventure: [
    {
      name: "Stray",
      rating: "8.5/10"
    },
    {
      name: "The Last of us",
      rating: "9.7/10"
    }
  ],
  Sandbox: [
    {
      name: "Red Dead Redemption II",
      rating: "9.7/10"
    },
    {
      name: "GTA V",
      rating: "9.5/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Pc Games </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Pc games. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}