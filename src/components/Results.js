import React, { Fragment } from 'react';
import ArticleList from './ArticleList';

export default (props) => {
  const { articles } = props;

  return (
    <Fragment>
      <div className='ui segment'>
        <b>Search Results!</b>
        <p>Found {articles.length} articles</p>
      </div>
      <ArticleList list={articles} />
    </Fragment>
  );
};
