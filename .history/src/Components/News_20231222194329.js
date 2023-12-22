import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News Tak - Top Headlines</h2>
        <div className="row">   
            <div className="col-md-4">
                <NewsItem title = "myTitle" description="myDescription" imgUrl = "https://live-production.wcms.abc-cdn.net.au/d6a549ef64cd18ea89d902d86c30b5c1?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=0&width=862&height=485"/>
            </div>
            <div className="col-md-4">
                <NewsItem title = "myTitle" description="myDescription"/>
            </div>
            <div className="col-md-4">
                <NewsItem title = "myTitle" description="myDescription"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
