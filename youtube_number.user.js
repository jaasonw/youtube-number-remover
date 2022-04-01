// ==UserScript==
// @name         youtube notification number remover
// @namespace    youtubenotif
// @version      1.7
// @description  removes the number in "(5) video title"
// @author       jasonw
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==
new MutationObserver((e) => {
    if (e[0].addedNodes[0].data != e[0].removedNodes[0].data) {
        document.title = document.title.replace(/^(\(\d*\))\s*/, "");
    }
}).observe(document.querySelector("title"), { childList: true, characterDataOldValue: true });
