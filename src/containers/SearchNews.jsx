import React, { Component } from 'react'
import SearchArticles from '../components/app/articles/SearchArticles'
import NewsArticleList from '../components/app/articles/NewsArticleList'
import { getArticles, getSearchedArticle } from '../services/newsApi' 

export default class SearchNews extends Component {
  state = {
    loading: true,
    articles: [],
    queryNewsArticles: '',
  }

  async componentDidMount() {
    const articles = await getArticles();
    this.setState({
      loading: false,
      articles,
    });
  }

  handleQueryChange = ({ target }) => {
    this.setState({ queryNewsArticles: target.value })
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    this.setState({ loading: true })
    const articles = await getSearchedArticle(this.state.queryNewsArticles)
    console.log(getArticles())
    this.setState({ 
      loading: false,
      articles
    })
  }



  render() {
    const { loading, articles, queryNewsArticles } = this.state;
    return loading ? <h1>Loading...</h1> :

    <>
      <SearchArticles 
        queryNewsArticles={queryNewsArticles}
        onArticleNameChange={this.handleQueryChange}
        onSubmit={this.handleSubmit}
      />
        <NewsArticleList articles={articles} />
    </>;
  }
}
