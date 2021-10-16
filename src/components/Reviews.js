import { useState, useEffect } from "react";
import Review from "./Review";

const Reviews = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftArrowClicked = () => {
    setIndex(index - 1);
  };

  const rightArrowClicked = () => {
    setIndex(index + 1);
  };

  const show = () => {
    if (index >= reviews.length) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(reviews.length - 1);
    }
    return (
      <Review
        review={reviews[index]}
        leftArrowClicked={leftArrowClicked}
        rightArrowClicked={rightArrowClicked}
      />
    );
  };

  return <section>{show()}</section>;
};

export default Reviews;
