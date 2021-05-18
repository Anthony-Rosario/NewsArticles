import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import SearchNews from './SearchNews';
import userEvent from '@testing-library/user-event';
import fetch from 'node-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(`https://newsapi.org/v2/everything?q=news&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`, (req, res, ctx) => {
    return res (
      ctx.json([{
        title: '',
        author: '',
        description: '',
        content: '',
        source: '',
        url: ''
      }])
    )
  })
);



describe('NewsSearch Container', () => {
  it('displays a list of articles dependent on search params', async () => {
    render(<SearchNews />);
    await screen.findByText('Loading...');

    const ulEl = await screen.findByRole('list', { name: 'news-article-list' });
    expect(ulEl).not.toBeEmptyDOMElement();

    const inputEl = await screen.findByLabelText('Search Articles');
    userEvent.type(inputEl, 'Puppies');

    const submitButton = await screen.findByRole('button', {
      name: 'news-search',
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const articles = screen.getAllByText('Pet', { exact: false });
      expect(articles).toHaveLength(12);
    });
  });
});