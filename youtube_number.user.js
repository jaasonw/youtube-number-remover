// ==UserScript==
// @name         youtube notification number remover
// @namespace    youtubenotif
// @version      1.6
// @description  removes the number in "(5) video title"
// @author       jasonw
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==
const observer = new MutationObserver((e) => {
    if (e[0].addedNodes[0].data != e[0].removedNodes[0].data) {
        document.title = document.title.replace(/^(\(\d*\))\s*/, "");
    }
});
observer.observe(document.querySelector("title"), { childList: true, characterDataOldValue: true });
