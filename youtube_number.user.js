// ==UserScript==
// @name         youtube notification number remover
// @namespace    youtubenotif
// @version      1.0
// @description  removes the number in "(5) video title"
// @author       jasonw
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

function fixTitle(title) {
    // lazy and shitty way to make sure we dont trim trailing () cus i suck at regex
    // ex: song title (feat. artist)
    // bugs if a video title has () at the beginning ¯\_(ツ)_/¯
    return title.substr(0, 4).replace(/ *\([^)]*\) */, "");
}
window.addEventListener("load", () => {
    document.title = fixTitle(document.title);

    let observer = new MutationObserver(() => {
        if (fixTitle(document.title) != document.title)
            document.title = fixTitle(document.title);
    });
    observer.observe(document.querySelector("title"), { subtree: true, characterData: true, childList: true });
});