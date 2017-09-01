import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        }
    }
    componentDidMount() {
        let url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger"
        fetch(url).then(results => {
            return results.json()
        }).then(data => {
            this.setState({ blogs: data })
        })
    }
    render() {
        return (
            <div>
                {this.state.blogs.map(blog => (
                    <div key={blog._id} className="col-lg-12 col-lg-offset-1 card">
                        <div  className="card-block">
                            <div className="profile">
                                <h3 className="headings">
                                <Link to={`/show/${blog._id}`}>{blog.title}</Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}