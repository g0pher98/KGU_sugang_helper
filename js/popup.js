var runtime_id = chrome.runtime.id;
document.querySelector('button').onclick = function() {
    chrome.tabs.create({url: "./background/index.html"});
};