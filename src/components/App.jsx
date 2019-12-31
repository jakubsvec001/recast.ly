import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      selected: false,
      selectedVideo: exampleVideoData[0]
    };
  }

  videoSelectHandler() {
    this.setState({
      selected: !this.state.selected
    });
  }

  updateSelectedVideo() {
    const selected = this.state.videos.filter(video => video.state.selected);
    // console.log(selected)
  }

  render() {
    return (
      <div>
        <Search />
        <VideoPlayer video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          handler={this.videoSelectHandler.bind(this)}
          updateSelectedVideo={this.updateSelectedVideo.bind(this)}
        />
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
