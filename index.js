$(document).ready(function () {
    const $btnEl = $(".btn");
    const $closeIconEl = $(".close-icon");
    const $trailerContainerEl = $(".trailer-container");
    const $videoEl = $("video");
  
    $btnEl.on("click", function () {
      $trailerContainerEl.removeClass("active");
    });
  
    $closeIconEl.on("click", function () {
      $trailerContainerEl.addClass("active");
      $videoEl.get(0).pause();
      $videoEl.get(0).currentTime = 0;
    });
  });
  