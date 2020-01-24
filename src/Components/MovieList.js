import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
    const generateList = () => {
        console.log('movies', movies)
        return movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
    }

    return (
        <>
            <h1>Movies</h1>
            <ul>{generateList()}</ul>
        </>
    )
}

export default MovieList