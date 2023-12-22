import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    console.log("hello i am constructor");
    this.state = {
      articles: [],
    };
  }

 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fa3dbec13bb44cd2a222250b4aea8871"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Tak - Top Headlines</h2>
       
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,83):""}
              imgUrl={element.urlToImage}
              newsUrl = {element.url}  
            />
          </div>
        })}
          
        </div>
      </div>
    );
  }
}

export default News;
