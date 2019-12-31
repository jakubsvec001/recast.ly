import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";
import YOUTUBE_API_KEY from "../config/youtube.js"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      selected: exampleVideoData[0],
    };
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
      query: "react",
      max: 5
    };

    this.props.searchYouTube( options, (videosArray) => {
      this.setState({
        videos: videosArray,
        selected: videosArray[0]
      })
    })
  }

  render() {
    return (
      <div>
        <Search />
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
