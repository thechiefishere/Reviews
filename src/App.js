// import "./App.css";
import { useState } from "react";
import reviews from "./data";
import Reviews from "./components/Reviews";

function App() {
  const [allReviews, setReviews] = useState(reviews);
  return (
    <main>
      <h2>Our Reviews</h2>
      <div className="line"></div>
      <Reviews reviews={allReviews} />
    </main>
  );
}

export default App;
