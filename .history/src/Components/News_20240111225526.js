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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    // console.log("hello i am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Tak`;
  }



  async componentDidMount() {
    this.update();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.update();

  };


  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.update();
  };

  async update() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa3dbec13bb44cd2a222250b4aea8871&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      totalResults: parsedData.articles,
      articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);

  };

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
        <h1 className="text-center" style={{ margin: '35px 0px' }}>News Tak - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}>

          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 100) : ""}
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