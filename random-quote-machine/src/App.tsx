// Hooks
import { useState } from "react";

// Icons
import { Quote, Twitter } from "lucide-react";

// Styles
import "./App.css";

// Data
import quotes from "./assets/quotes.json";

interface Quote {
  quote: string;
  author: string;
}

const colors = [
  "#FF6F61",
  "#6B5B95",
  "#F7B7A3",
  "#E76F51",
  "#2A9D8F",
  "#F4A300",
  "#264653",
  "#6A4C93",
  "#D4A5A5",
  "#FFB6B9",
  "#A2D2FF",
  "#FF9A8B",
  "#D9BF77",
];

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState<string>(
    getRandomColor()
  );

  const changeQuote = () => {
    setQuote(getRandomQuote);
    setBackgroundColor(getRandomColor());
  };

  const tweetQuote = encodeURIComponent(`"${quote.quote}" — ${quote.author}`);

  return (
    <section className="container" style={{ backgroundColor }}>
      <div id="quote-box" className="quote">
        <div className="quote__content">
          <Quote />
          <p className="quote__text" id="text">
            {quote.quote}
          </p>
          <h3 className="quote__author" id="author">
            {quote.author}
          </h3>
        </div>
        <div className="quote__actions">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${tweetQuote}`}
            target="_blank"
            id="tweet-quote"
            rel="noopener noreferrer"
            className="quote__share"
            aria-label="Share on Twitter"
          >
            <Twitter />
          </a>
          <button
            className="quote__button"
            id="new-quote"
            onClick={changeQuote}
            aria-label="Change Quote"
          >
            Change Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
