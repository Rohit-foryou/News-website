import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, newsUrl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imgUrl?"https://www.androidauthority.com/wp-content/uploads/2023/07/Samsung-Galaxy-Unpacked-Summer-2023-Seoul.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span class="badge text-bg-success">Success</span></h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {!author? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noopener" href= {newsUrl} target = "_blank" className="btn btn-dark btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
