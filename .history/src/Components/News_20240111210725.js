import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    totalResults: 0,
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
  


  async componentDidMount() {
    this.update();
  }

  handleNextClick = async () => {
    this.setState({page: this.state.page+1});
    this.update();

  };
  

  handlePrevClick = async () => {
    this.setState({page: this.state.page-1});
    this.update();
  };

  async update() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
  
    this.setState({
      totalResults: parsedData.totalResults, // Update this line
      articles: parsedData.articles, // Update this line
      loading: false,
    });
    this.props.setProgress(100);
  }
  

  fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
  
      this.setState({
        totalResults: parsedData.totalResults,
        articles: this.state.articles.concat(parsedData.articles),
        loading: false,
      });
  };


  render() {
    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px'}}>News Tak - Top Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>
          
        <div className="container">
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
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
