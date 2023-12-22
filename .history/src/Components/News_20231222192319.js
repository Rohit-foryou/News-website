import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News Tak - Top Headlines</h2>
        <div className="row">   
        <div className="col-md-3"></div>
        <NewsItem title = "myTitle" description="myDescription"/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        </div>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News
