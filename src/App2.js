import React from 'react'
import axios from 'axios'

import MovieList from './Components/MovieList'

class App2 extends React.Component {

    state = {
        fullListOfMovies: [],
        movies: [],
        currentMovie: {},
        page: 'movies',
        filter: 'all',
        loading: false
    }

    fetchMovies = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&page=2`)  
        return response.data.results
    }

    fetchData = async () => {
        try {
            this.setState({ loading: true })
            const movies = await this.fetchMovies()
            console.log(movies)
            this.setState({
                loading: false,
                fullListOfMovies: movies,
                movies
            })
        } catch (e) {
            console.log(e.response.status)
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate() {
        console.log('UPDATED')
    }

    filterByPopularity = pop => {
        const filteredMovies = this.state.movies.filter(movie => movie.popularity < pop)
        this.setState({
            movies: filteredMovies
        })
    }

    resetListToFullMovieList = () => {
        this.setState({
            movies: this.state.fullListOfMovies
        })
    }

    render() {
        const { page, movies, loading } = this.state
        let pageComponent = ''

        if(loading) return <h2>Loading...</h2>

        if(page === 'movies') pageComponent = <MovieList movies={movies} />

        return (
            <div>
                <ul>
                    <li onClick={this.resetListToFullMovieList}>All</li>
                    <li onClick={() => this.filterByPopularity(40)}>Popular</li>
                </ul>
                {pageComponent}
            </div>
        )
    }
}

export default App2