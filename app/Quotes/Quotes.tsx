"use client";

import Marquee from "react-fast-marquee";

const quotes = [
  "“A good teacher can inspire hope, ignite the imagination, and instill a love of learning." - Unkown",
  "“The art of teaching is the art of assisting discovery.” - Mark Van Doren",
  "“Those who know, do. Those that understand, teach.” - Aristotle",
  "“It is the supreme art of the teacher to awaken joy in creative expression and knowledge.” - Albert Einstein",
  "“Education is not the filling of a pail, but the lighting of a fire.” - William Butler Yeats",
  "“Teaching is the one profession that creates all other professions.” - Unkown",
  "“The influence of a good teacher can never be erased.” - Unkown",
  "“What the teacher is, is more important than what he teaches.” - Karl Menninger",
  "“A teacher affects eternity; he can never tell where his influence stops.” - Henry Adams",
  "“To teach is to touch a life forever.”",
];
  

const QuotesScroller = () => {
  return (
    <Marquee speed={100} gradient={false} >
      {quotes.map((quote, i) => (
        <span
          key={i}
          className="mx-12 text-2xl font-semibold"
          style={{ color: "#FE7743" }}
        >
          {quote}
        </span>
      ))}
    </Marquee>
  );
};

export default QuotesScroller;
