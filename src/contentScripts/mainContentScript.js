console.log(
  "Hello! I am a chrome extension content script.  I'm set to run on every page, but I can be set to run on specified pages.  I can interac with the DOM and send information to background.js",
);

setTimeout(() => {
  chrome.runtime.onMessage.addListener((req) => {
    console.log(req);
  });
}, 1000);
