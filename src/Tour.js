import React, { useState } from "react";

const Tour = (props, id, removeTour) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={props.image} alt={props.name} />
      <footer>
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">{props.price}</h4>
        </div>
        <p>
          {readMore ? props.info : `${props.info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "See Less" : "Read More"}
          </button>
        </p>
        <button
          onClick={() => {
            removeTour(id);
          }}
          className="delete-btn"
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
