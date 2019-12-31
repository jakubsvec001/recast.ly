import YOUTUBE_API_KEY from "../config/youtube.js";

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    type: "GET",
    data: {
      key: options.key,
      q: options.query,
      part: "snippet",
      maxResults: options.max,
      type: "video",
      videoEmbeddable: true
    },
    success: data => {
      console.log("Success!", data);
      callback(data.items);
    },
    error: response => {
      console.log('Failure', response);
    }
  });
};

export default searchYouTube;
