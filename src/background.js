// Main Service Worker

setTimeout(() => {
  console.log('Hello from the Background Script!');
}, 2000);

chrome.runtime.onMessage.addListener((req) => {
  let incoming = req.text;
  console.log(incoming);

  chrome.tabs.query({ active: true }, (tab) => {
    let activeTabId = tab[0].id;
    let message = { text: incoming };
    chrome.tabs.sendMessage(activeTabId, 'hello form the background');
  });
});
