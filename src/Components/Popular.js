import React, { Component } from 'react'
import axios from 'axios'

class Popular extends Component {

    constructor(props){
        super(props)

    this.state = {
        posts: [],

    }
}
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=fa141d49d3a1e439372e15d61f4d4607')
            .then(res => {

                this.setState({
                    posts: res.data.results
                })
            })
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
        let posts = this.state.posts
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card grey" key={post.id}>
                    <div className="card-content">
                        <span className="card-title black-text">{post.title}</span>
                        <img src={ `https://image.tmdb.org/t/p/w200/${post.poster_path.substring(1)}`    } alt={ post.original_title }/>
                        <p className="black-text">{post.overview}</p>
                    </div>
                    </div>
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