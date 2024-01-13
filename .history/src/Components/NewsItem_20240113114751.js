import React from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img style = {{width: '100%', height: "250px"}}
            src={
              !imgUrl
                ? "https://www.androidauthority.com/wp-content/uploads/2023/07/Samsung-Galaxy-Unpacked-Summer-2023-Seoul.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noopener noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
