import React, { Component } from 'react';

export default class CreatePost extends Component{
    constructor(props){
        super(props)
        this.state={
            userName:'',
            title:'',
            blog:''
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addBlog = (e) => {
        e.preventDefault();
        this.setState({userName:e.target.value, title:e.target.value, blog:e.target.value})
        let blogItem = JSON.stringify(this.state);
        let url = "https://tiny-lasagna-server.herokuapp.com/collections/blogger"
        fetch(url, {
            method:"POST",
            body: blogItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log(response, "YAY");
            this.props.history.push("/show")
        }).catch(err => {
            console.log(err, "boo!");
        })
        this.setState({userName:'', title:'', blog:''})

    }
    render(){
        return(
            <div className="card form">
            <div className="card-block">
                <h2>Say it out loud</h2>
                <form onSubmit={this.addBlog}>
                    <div className="form-group">
                        <label htmlFor="userName">User Name</label>
                        <input type="text" className="form-control" id="userName" name="userName" placeholder="Name or User Name" value={this.state.userName} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="songArtist">Title</label>
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="songNotes">Rant...</label>
                        <textarea className="form-control" rows='5' id="blog" name="blog" value={this.state.blog} onChange={this.handleChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>
        )
    }
}