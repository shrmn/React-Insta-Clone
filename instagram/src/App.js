import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hipstamatic</h1>        
          <PostContainer      
          posts={this.state.posts}
          />
      </div>
    );
  }  
}

dummyData.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.string)
}

export default App;