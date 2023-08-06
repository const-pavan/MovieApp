import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'
function App() {
  const API_URL = 'http://www.omdbapi.com/?apikey=46ab70c&s=movies&page=1'
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
  }, [])
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  // useEffect(() => {
  //   const url = 'http://www.omdbapi.com/?apikey=46ab70c&s=movies&page=1'
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const promises = data.Search.map((movie) => {
  //         const url = `http://www.omdbapi.com/?apikey=46ab70c&i=${movie.imdbID}`
  //         return fetch(url).then((response) => response.json())
  //       })
  //       return Promise.all(promises)
  //     })
  //     .then((movies) => setMovies(movies))
  // }, [])
  console.log(movies)
  const apiKey = '46ab70c'
  const searchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`

  const handleSearch = (e) => {
    e.preventDefault()
    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
  }
  const handleChange = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  }

  return (
    <div className='App'>
      <div className='search_nav'>
        <div className='title'>
          <h1>Movie</h1>
        </div>

        <div className='search_box'>
          <form onSubmit={handleSearch}>
            <input value={searchQuery} onChange={handleChange} />
            <button>Search </button>
          </form>
        </div>
      </div>
      <div className='movies_continer'>
        {movies ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <h2>Movie not found</h2>
        )}
      </div>
    </div>
  )
}

export default App
