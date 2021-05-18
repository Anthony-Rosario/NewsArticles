import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SearchNews from './SearchNews';
import userEvent from '@testing-library/user-event';

const query = 'lies'
jest.mock('../services/newsApi', () => ({
  getArticles: () => [{
    author: 'CNN',
    title: 'Have Some Lies',
    description: 'Media Lies',
    url: 'cnn.com',
    content: 'some lies about Palestine'
  }],
  getSearchedArticle: (query) =>[{
    author: 'CNN',
    title: 'Have Some Lies',
    description: 'Media Lies',
    url: 'cnn.com',
    content: 'some lies about Palestine'
  }]
  }))


describe('NewsSearch Container', () => {
  it('displays a list of articles dependent on search params', async () => {
    render(<SearchNews />);
    await screen.findByText('Loading...');

    const ulEl = await screen.findByRole('list', { name: 'news-article-list' });
    expect(ulEl).not.toBeEmptyDOMElement();

    const inputEl = await screen.findByLabelText('Search Articles');
    userEvent.type(inputEl, 'lies');

    const submitButton = await screen.findByRole('button', {
      name: 'news-search',
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByText('lies', { exact: false });
      expect(articles).toHaveLength(2);
    });
  });
});