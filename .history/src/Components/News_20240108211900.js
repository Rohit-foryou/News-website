import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    // console.log("hello i am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ 
        articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handleNextClick = async () => {
    if(this.state.page + 1 >Math.ceil(this.state.totalResults/20)){

    }
    else
      {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page + 1}&pageSize=20`;
      
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
    
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
        });
      
    }
  };
  

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page - 1}&pageSize=20`;
  
    
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
  
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
      });
  };


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News Tak - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 83) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
