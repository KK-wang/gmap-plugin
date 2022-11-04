chrome.runtime.onMessage.addListener((req) => {
  chrome.downloads.download({
    url: req.url,
    filename: `${req.addressText}/${req.coordinate}`,
  });
});