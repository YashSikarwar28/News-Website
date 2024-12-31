import React from 'react';

const Card = ({data}) => {
  if (!Array.isArray(data)) {
    return <>
    <h3>Loading News....</h3>
    </>; 
  }

  return (
    <div className='main'>
      {data.map((org) => {
        
        
        
        return (
            

          <div className='card'>
            <div className='img'>
                <img src={org.urlToImage} alt="" />
            </div>
            <div className='content'>
            <p>{org.title}</p> 
            <div className='description'>
            <p>{org.description.length>140 ? org.description.slice(0,140):org.description}</p>
            </div>
            <a href={org.url} className='readmore' target='blank'>Read More</a>
            </div>
          </div>
            
        
        );
      })}
    </div>
  );
};

export default Card;
