function fixTitle(title) {
    return title.replace(/ *\([^)]*\) */g, "");
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