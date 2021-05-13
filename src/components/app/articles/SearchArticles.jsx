import React from 'react'
import PropTypes from 'prop-types'

function SearchArticles({ articleName, onArticleNameChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="article-name">Search Articles</label>
        <input 
          id="character-name"
          type="text"
          value={articleName}
          onChange={onArticleNameChange}
        />
    </form>
  )
}

SearchArticles.propTypes = {
  articleName: PropTypes.string.isRequired,
  onCharacterNameChange: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired,
};

export default SearchArticles;