import React, { Component } from 'react'
import axios from 'axios'

class Popular extends Component {

    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {

                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    render() {

        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card grey" key={post.id}>
                    <div className="card-content">
                        <span className="card-title black-text">{post.title}</span>
                        <p className="black-text">{post.body}</p>
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