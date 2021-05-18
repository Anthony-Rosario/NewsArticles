export const getArticles = async () => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=news&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`);
  const { articles } = await res.json();

  return articles?.map(article => ({
    source: article.source,
    title: article.title,
    author: article.author,
    description: article.description,
    content: article.content,
    url: article.url,
  }));
}

export const getSearchedArticle = async(query) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`)
  const { articles } = await res.json();

  return articles?.map(article => ({
    source: article.source,
    title: article.title,
    author: article.author,
    description: article.description,
    content: article.content,
    url: article.url,
  }));
}