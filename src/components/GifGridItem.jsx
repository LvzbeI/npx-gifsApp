import React from 'react'


export const GifGridItem = ( {id, title, url} ) => {
    console.log(id, title, url);
  return (

   
      <div className="card animate__animated animate__fadeIn">
    {/* <div className="card-image"> */}
        <img src={url} alt={title} className='card-image' />
    {/* </div> */}
    <div className="category"> {title} </div>
    
        </div>

    
  )
}
