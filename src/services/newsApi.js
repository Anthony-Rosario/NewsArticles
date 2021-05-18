
const mungedResponse = (articles) => {
  return articles.map(({ source, author, title, description, url, content }) => ({
    source: source.name,
    author,
    title, 
    description,
    url, 
    content
  }));
}

export const getArticles = async () => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`)
  const { articles } = await res.json();

  return mungedResponse(articles);
}

export const getSearchedArticle = async(query) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`)
  const { articles } = await res.json();

  return mungedResponse(articles);
}