import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import Search from "./Search.js";
import exampleVideoData from "../data/exampleVideoData.js";

var App = () => (
  <div>
    <Search />
    <VideoPlayer video={{}} />
    <VideoList videos={exampleVideoData} />
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
