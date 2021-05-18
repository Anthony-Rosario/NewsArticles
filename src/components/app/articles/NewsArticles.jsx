import React from 'react'
import PropTypes from 'prop-types'

function NewsArticles({ author, title, description, url, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>{description} - {content}</p>
      {/* <h4>{source}</h4> */}
      <h5>{url}</h5>
    </div>
  )
}

NewsArticles.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
}

export default NewsArticles;