// TODO: Render the `App` component to the DOM
import App from "./components/App.js";
import searchYouTube from "./lib/searchYouTube.js";
//import searchYouTube_fetch from "./lib/searchYouTube_fetch.js"

ReactDOM.render(
  <App searchYouTube={searchYouTube} />,
  document.getElementById("app")
);
