import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?domains=wsj.com&pageSize=20&apiKey=2b2ec47caa5f40899bf142dc2645f5f0";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&pageSize=20&apiKey=2b2ec47caa5f40899bf142dc2645f5f0&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      totalResults: parsedData.totalResults
    })

  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&pageSize=20&apiKey=2b2ec47caa5f40899bf142dc2645f5f0&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      totalResults: parsedData.totalResults
    })
  }

  render() {
    return (
      <>
        <div className='container my-3'>
          <h2 className='text-center my-3'>Top deadlines</h2>
          <div className='row'>
            {this.state.articles.map((element) => {
              let url = element.url ? element.url : "https://www.wsj.com/articles/new-display-tech-is-coming-from-apple-google-meta-microled-11674248409";
              let urlToImage = element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-706795/social";
              let description = element.description ? element.description.substring(0, 150) + "..." : "Our phones, smartwatches and smart glasses will soon get longer battery life and better visibility in daylight";
              let title = element.title ? element.title.substring(0, 45) + "..." : "New Display Tech Is Coming From Apple, Google, Meta and Others - The Wall Street Journal";

              return <div key={url} className="col-md-4">
                <NewsItem title={title} description={description} imgUrl={urlToImage} newsUrl={url} />
              </div>
            })}
          </div>
          <div className='text-center'>{`${this.state.page * 20}/${this.state.totalResults}`}</div>
          <div className="container justify-content-between d-flex">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </>
    )
  }
}

export default NewsComponent