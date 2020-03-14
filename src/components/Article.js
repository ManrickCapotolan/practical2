import React from 'react'

export default (props) => {
  const { urlToImage, title, url, description } = props.article;

  return (
    <div className='item'>
      <div className="image">
        <img 
          className="image left floated" 
          src={urlToImage}
          alt={title}
        />
      </div>
      <div className="content">
        <a href={url} className="header">{title}</a>
        <div className="description">{description}</div>
      </div>
    </div>
  )
}
