import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YT_API_KEY = 'AIzaSyByfAHCFp6XDfZ7iADBLU7qzI5jPVuRckY';

// Create new component. This component should produce some HTML
// ES6 function syntax () => {}
// one component per file
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('snowboarding');
  }

  videoSearch(term) {
    YTSearch({key: YT_API_KEY, term: term}, videos => {
      // this.setState({ videos: videos });
      // same as ...
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term), 1000})
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  };
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
