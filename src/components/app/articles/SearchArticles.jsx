import React from 'react'
import PropTypes from 'prop-types'

function SearchArticles({ queryNewsArticles, onArticleNameChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="article-name">Search Articles</label>
        <input 
          id="article-name"
          type="text"
          value={queryNewsArticles}
          onChange={onArticleNameChange}
        />
        <button aria-label='news-search'></button>
    </form>
  )
}

SearchArticles.propTypes = {
  queryNewsArticles: PropTypes.string.isRequired,
  onArticleNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchArticles;