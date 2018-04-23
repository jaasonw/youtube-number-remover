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
    return title.replace(/ *\([^)]*\) */, "");
}
window.addEventListener("load", () => {
    document.title = fixTitle(document.title);

    var observer = new MutationObserver(() => {
        if (fixTitle(document.title) != document.title)
            document.title = fixTitle(document.title);
    });
    var config = { subtree: true, characterData: true, childList: true };
    observer.observe(document.querySelector("title"), config);
});