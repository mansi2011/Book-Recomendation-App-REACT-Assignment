import { useState } from "react";
import "./styles.css";

const genre = {
  javascript: [
    {
      book: "Eloquent JavaScript",
      rating: "4/5"
    },
    {
      book: "You Don't Know JS",
      rating: "3.5/5"
    },
    {
      book: "Javascript - The Good Parts",
      rating: "3.5/5"
    }
  ],
  fiction: [
    {
      book: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      book: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    },
    {
      book: "The Midnight Library",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      book: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      book: "Loonshots",
      rating: "5/5"
    },
    {
      book: "Business Adventures",
      rating: "5/5"
    }
  ]
};

const genreName = Object.keys(genre);

export default function App() {
  var [selectedGenre, setSelectedGenre] = useState("javascript");

  function clickToGetGenre(item) {
    setSelectedGenre(item);
  }

  const renderList = genre[selectedGenre].map((item) => {
    return (
      <div className="list-item">
        <p>{item.book}</p>
        <p>{item.rating}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h2 className="title">
        <span>📚</span> goodbooks
      </h2>
      <small>Checkout my favorite books. Select a genre to get started</small>
      <br />
      <div className="btn">
        {genreName.map((genre) => {
          return (
            <span className="btn-click" onClick={() => clickToGetGenre(genre)}>
              {genre}
            </span>
          );
        })}
        <hr className="hr-line" />
      </div>

      <div>
        <div className="result-list">{renderList}</div>
      </div>
    </div>
  );
}
