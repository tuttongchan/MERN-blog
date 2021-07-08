import React from 'react';
import './SinglePost.css';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1070321/pexels-photo-1070321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsa voluptates beatae eaque ex corporis eos quibusdam laborum quasi quod, deleniti recusandae ab repellendus minus corrupti ad dolorem tempore harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsa voluptates beatae eaque ex corporis eos quibusdam laborum quasi quod, deleniti recusandae ab repellendus minus corrupti ad dolorem tempore harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsa voluptates beatae eaque ex corporis eos quibusdam laborum quasi quod, deleniti recusandae ab repellendus minus corrupti ad dolorem tempore harum.</p>
      </div>
    </div>
  );
};

export default SinglePost;
