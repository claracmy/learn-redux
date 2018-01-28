import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    //index of the post
    //postId is provided by the router, in the url
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];

    //Loop over existing comments and allow new comments to be pushed for 0 comments photos
    const postComments = this.props.comments[postId] || [];

    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
};

export default Single;
