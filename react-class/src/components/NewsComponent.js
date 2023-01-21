import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'

export class NewsComponent extends Component {

  static defaultProps={
    pageSize : 21,
    category: "general",
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title=`NewsDezire | ${this.props.category.charAt(0).toUpperCase()+this.props.category.substr(1)}`;
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=2b2ec47caa5f40899bf142dc2645f5f0`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    if (this.state.page >= 1) {
      await this.setState({
        page: this.state.page - 1,
      })
      this.updateNews();
    }
  }
  handleNextClick = async () => {
    if (this.state.page * this.props.pageSize <= this.state.totalResults) {
      await this.setState({
        page: this.state.page + 1,
      })
      this.updateNews();
    }
  }

  render() {
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center my-3'>Top {this.props.category} headlines</h1>
          {this.state.loading && <Spinner />}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) => {
              let url = element.url ? element.url : "https://www.wsj.com/articles/new-display-tech-is-coming-from-apple-google-meta-microled-11674248409";
              let urlToImage = element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-706795/social";
              let description = element.description ? element.description.substring(0, 150) + "..." : "Our phones, smartwatches and smart glasses will soon get longer battery life and better visibility in daylight";
              let title = element.title ? element.title.substring(0, 45) + "..." : "New Display Tech Is Coming From Apple, Google, Meta and Others - The Wall Street Journal";
              let source = element.source.name;

              return <div key={url} className="col-md-4">
                <NewsItem title={title} description={description} imgUrl={urlToImage} newsUrl={url} source={source}/>
              </div>
            })}
          </div>
          <div className='text-center'>{`${this.state.page * this.props.pageSize <= this.state.totalResults ? this.state.page * this.props.pageSize : this.state.totalResults}/${this.state.totalResults}`}</div>
          <div className="container justify-content-between d-flex">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button type="button" disabled={this.state.page * this.props.pageSize >= this.state.totalResults} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default NewsComponent