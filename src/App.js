import React, { useState } from 'react';
import Filters from './components/Filters';
import Results from './components/Results';
import { getNews } from './services/newsApi';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  const onSubmit = async (data) => {
    const { country, endpoint, search } = data;
    const defaults = [{ key: 'q', value: search || '-' }];
    const param = endpoint === 'everything'
      ? defaults
      : [ ...defaults, { key: 'country', value: country }];

    const result = await getNews(`/${endpoint}`, param);
    console.log(result.data);
    setArticles(result.data.articles);
  };

  return (
    <div className='app ui container'>
      <h1 className='title'>Manrick's News App</h1>
      <Filters onSubmit={onSubmit} />
      <Results articles={articles} />
    </div>
  );
}

export default App;
