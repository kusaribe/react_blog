import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  //first time load component will run this method
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={`/posts/${post.id}`}>
         {post.title}
         </Link>
        </li>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
          add a post
          </Link>
        </div>
       <h3>Posts</h3>
       <ul className="list-group">
        {this.renderPosts()}
       </ul>
      </div>
    );
  }
}
// why the fuck here, how ??
// dont ask
function mapStateToProps(state){
  return { posts: state.posts};
}
//map function as first parameter of connect
export default connect(mapStateToProps, {fetchPosts}) (PostsIndex);
