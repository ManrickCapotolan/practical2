import React from 'react';
import Article from './Article';

export default (props) => {
  const { list } = props;
  return (
    <div className='ui items'>
      {
        list.map((item, idx) => <Article 
          key={idx}
          article={item}
        />)
      }
    </div>
  )
};
