  import React from 'react'
  import PropTypes from 'prop-types'
  import NewsArticles from './NewsArticles';

  
  function NewsArticleList({ articles }) {
    return (
      <ul aria-label='news-article-list'>
        {articles && 
        <>
        {articles.map(({ source, author, title, description, url, content }) => (
          <li key={`${source}-${title}`}>
            <NewsArticles 
            source={source}
            author={author}
            title={title}
            description={description}
            url={url}
            content={content}
            />
          </li>
        ))}
        </>
        }
      </ul>
    );
  };
  
  NewsArticleList.propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        source: PropTypes.string,
        author: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        content: PropTypes.string,
      })
    ).isRequired,
  };
  
export default NewsArticleList;