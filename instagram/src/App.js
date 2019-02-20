import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

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
          <SearchBar />
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

