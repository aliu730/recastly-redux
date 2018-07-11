import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
// console.log(YOUTUBE_API_KEY);

var handleVideoSearch = (q) => {
  // console.log(YOUTUBE_API_KEY);
  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q, max: 5}, function(data) {
      // console.log(data);
      dispatch(changeVideo(data[0]));
      dispatch(changeVideoList(data));
      // dispatch(data);
    });
  };
};

export default handleVideoSearch;
