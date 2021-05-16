import React from 'react'
import PropTypes from 'prop-types'

function SearchArticles({ queryNewsArticles, onArticleNameChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="query-search">Search Articles</label>
        <input 
          id="query-search"
          type="text"
          value={queryNewsArticles}
          onChange={onArticleNameChange}
        />
        <button aria-label='news-search'>Search</button>
    </form>
  )
}

SearchArticles.propTypes = {
  queryNewsArticles: PropTypes.string.isRequired,
  onArticleNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchArticles;