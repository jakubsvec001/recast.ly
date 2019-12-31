import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

var initialVideo = {
  id: {
    videoId: ''
  },
  snippet: {
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
      }
    },
    channelTitle: '',
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selected: initialVideo,
      search: ""
    };
  }

  searchHandler(event) {
    var options = {
      key: YOUTUBE_API_KEY,
      query: event.target.value,
      max: 5
    };

    const cb = function(videosArray) {
      this.setState({
        videos: videosArray,
        selected: videosArray[0]
      });
    };

    const debounced = _.debounce(() => {
      this.props.searchYouTube(options, cb.bind(this));
    }, 500);

    debounced();
  }

  videoSelectHandler(video) {
    this.setState({
      selected: video
    });
  }

  componentDidMount() {
    //make initial request
    var options = {
      key: YOUTUBE_API_KEY,
      query: "react.js",
      max: 5
    };

    this.props.searchYouTube(options, videosArray => {
      this.setState({
        videos: videosArray,
        selected: videosArray[0]
      });
    });
  }

  render() {
    return (
      <div>
        <Search
          searchHandler={this.searchHandler.bind(this)}
          searchValue={this.state.search}
        />
        <VideoPlayer video={this.state.selected} />
        <VideoList
          videos={this.state.videos}
          handler={this.videoSelectHandler.bind(this)}
        />
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
