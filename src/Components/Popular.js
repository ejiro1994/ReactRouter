import React, { Component } from 'react'
import axios from 'axios'
import MovieCard from './Components/MovieCard'

class Popular extends Component {

    constructor(props){
        super(props)

    this.state = {
        loading: true,
        posts: [],
        error: null

    }
}
    componentDidMount() {

        // axios.get('https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607')
        //     .then(res => {
        //         setTimeout(() => {
        //             this.setState({
        //                 posts: res.data.results,
        //                 loading: false
        //             })
        //         }, 500)
             
        //     })
        
        const fetchMovies = async () => {

            // url = 'https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&sort_by=popularity.desc' // app.get('/movie')
            // url = 'https://api.themoviedb.org/3/discover/movie/fa141d49d3a1e439372e15d61f4d4607/1' // app.get('/movie/:apiKey/:movieId')


            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&page=4`)  
            return response.data.results
        }

        const fetchData = async () => {
            try {
                const movies = await fetchMovies()
                console.log(movies)
                this.setState({
                    loading: false,
                    posts: movies
                })
            } catch (e) {
                console.log(e.response.status)

                if(e.response.status === 401) {
                    this.setState({
                        loading: false,
                        error: 'ERROR FETCHING DATA'
                    })
                } else if(e.response.status === 404) {
                    this.setState({
                        loading: false,
                        error: 'ERROR DATA NOT FOUND'
                    })
                }
                // this.setState({
                //     loading: false,
                //     error: 'ERROR FETCHING DATA'
                // })
            }
            

            // const movie = await fetchMovie(movies[0].id)
        }

        // const fetchMovie = async id => {
        //     const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607&movieId=${id}`)   
        //     return response.data
        // }

        fetchData()

    }

    // this.state.posts = res.data.results

        //     {
        //     "popularity":561.848,
        //     "vote_count":1938,
        //     "video":false,
        //     "poster_path":"\/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        //     "id":419704,
        //     "adult":false,
        //     "backdrop_path":"\/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
        //     "original_language":"en",
        //     "original_title":"Ad Astra",
        //     "genre_ids":[12,18,9648,878,53],
        //     "title":"Ad Astra",
        //     "vote_average":6,
        //     "overview":"The near future, a time when both hope and h",
        //     "release_date":"2019-09-17"
        // }

        // this.state.posts.post[0].title == Ad Astra

        
    

    render() {

        if(this.state.loading) return <h1>Loading...</h1>
        else if(this.state.error) return <h1>{this.state.error}</h1>

        let posts = this.state.posts
        const postList = posts.length ? (
            posts.map(post => {
                return (
                 < MovieCard />
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        ) 
        return (
            <div className="container">
                <h4 className="center">Popular</h4>
                {postList}
            </div>
        )
    }

}


export default Popular