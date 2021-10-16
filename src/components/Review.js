const Review = ({ review, leftArrowClicked, rightArrowClicked }) => {
  return (
    <article>
      <img src={review.image} alt={review.name} />
      <h4>{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="text">{review.text}</p>
      <div className="icon-group">
        <i className="fa fa-angle-left fa-2x" onClick={leftArrowClicked}></i>
        <i className="fa fa-angle-right fa-2x" onClick={rightArrowClicked}></i>
      </div>
    </article>
  );
};

export default Review;
