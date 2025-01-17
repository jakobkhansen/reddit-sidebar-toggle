// Reddit Sidebar Toggle.
// Created by Dylan Araps.
/* eslint-disable no-undef */


var hidden = true;

chrome.browserAction.onClicked.addListener(function() {
    hidden = !hidden;

    chrome.tabs.executeScript({
        file: "scripts/reddit.js"
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (hidden && changeInfo.status == 'complete') {
        chrome.tabs.executeScript({
            file: "scripts/reddit.js"
        })
    }
})
