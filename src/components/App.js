import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     videos: [],
  //     currentVideo: null
  //   };
  // }

  componentDidMount() {
    this.props.handleSearchInputChange('react tutorials');
  }

  // handleVideoListEntryTitleClick(video) {
  //   this.setState({currentVideo: video});
  // }

  // getYouTubeVideos(query) {
  //   var options = {
  //     key: this.props.API_KEY,
  //     query: query
  //   };

    // this.props.handleSearchInputChange(options);
    // , (videos) =>
    //   this.setState({
    //     videos: videos,
    //     currentVideo: videos[0]
    //   })
    // );
  // }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.props.handleSearchInputChange.bind(this)}/>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer
              // handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              // videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: (q) => dispatch(handleVideoSearch(q))
  };
};

export default connect(null, mapDispatchToProps)(App);