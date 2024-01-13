import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    // console.log("hello i am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async update(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
  
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
      });
  }

  async componentDidMount() {
    this.update();
  }

  handleNextClick = async () => {
    if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
    
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
        });
      
    }

    
  };
  

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
  
    //   this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
      this.setState({page: this.state.page - 1});
      this.update();
  };


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}}>News Tak - Top Headlines</h1>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 83) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
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
            disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)}
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
