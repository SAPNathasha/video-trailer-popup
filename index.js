//Ensure DOM is fully loaded 
$(document).ready(function () {
    //Select elements using jQuery
    const $btnEl = $(".btn");
    const $closeIconEl = $(".close-icon");
    const $trailerContainerEl = $(".trailer-container");
    const $videoEl = $("video");
  
    // Event listner for button click
    $btnEl.on("click", function () {
      $trailerContainerEl.removeClass("active");
    });
  

    // Event listner for the close icon click
    $closeIconEl.on("click", function () {
      $trailerContainerEl.addClass("active");
      $videoEl.get(0).pause();
      $videoEl.get(0).currentTime = 0;
    });
  });
  