  import React from 'react'
  import PropTypes from 'prop-types'
  import NewsArticles from './NewsArticles';

  
  function NewsArticleList({ articles }) {
    return (
      <ul aria-label='news-article-list'>
        {articles && 
        <>
        {articles?.map(({ author, title, description, url, content }) => (
          <li key={`${author}-${title}`}>
            <NewsArticles
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
        author: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        content: PropTypes.string,
      })
    ).isRequired,
  };
  
export default NewsArticleList;