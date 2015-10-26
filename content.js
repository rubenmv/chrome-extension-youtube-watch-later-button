/**
 * Wait for page to load
 */

var domChecker = window.setInterval(function () {
  if (document.readyState === "complete") {
    window.clearInterval(domChecker);
    // Create button
    createButton();
  }
}, 500);


function createButton() {
  var buttonHTML = "<button class='ywlb yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button spf-nolink hide-until-delayloaded addto-watch-later-button yt-uix-tooltip' type='button' onclick=';return false;' role='button' title='Watch Later' data-video-ids='" + document.querySelector("[itemprop=videoId]").content + "' data-tooltip-text='Watch Later' aria-labelledby='yt-uix-tooltip163-arialabel'></button>";
  
  var watchButtons = document.getElementById("watch8-secondary-actions");
  watchButtons.insertAdjacentHTML("afterbegin", buttonHTML);
}