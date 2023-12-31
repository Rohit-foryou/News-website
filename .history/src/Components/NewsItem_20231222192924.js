import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://live-production.wcms.abc-cdn.net.au/d6a549ef64cd18ea89d902d86c30b5c1?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=0&width=862&height=485" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
