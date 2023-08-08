import React from 'react'
import './MovieCard.css'
function MovieCard({ movie }) {
  return (
    <div className='card'>
      <div className='poster'>
        <img
          src={
            movie.Poster
              ? movie.Poster
              : 'https://unsplash.com/photos/q8P8YoR6erg'
          }
        />
      </div>
      <div className='info'>
        <p className='title'>{movie.Title}</p>
        <p className='vote'>{movie.Year}</p>
      </div>
      <div className='overview'>
        <h2 className='overview_title'>OverView:</h2>
        <p className='overview_info'>{movie.Plot}</p>
      </div>
    </div>
  )
}

export default MovieCard
