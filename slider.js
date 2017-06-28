$(document).ready(function(){
  initializeSlider();

  function initializeSlider()
  {
    // Load the HTML hook
    var sliderData = $('#slider-container img');

    // If the hook is broken, throw error to stop script
    if(sliderData.length == 0) {
      throw "Erreur de selection";
    }
    $('#slider-container').remove();
  }

});
