$(document).ready(function(){
  var sliderHTML = "";
  var sliderData;
  var height = "500";

  initializeSlider();
  createSlider();
  render();


  function initializeSlider()
  {
    // Load the HTML hook
    sliderData = $('#slider-container img');

    // If the hook is broken, throw error to stop script
    if(sliderData.length == 0) {
      throw "Erreur de selection";
    }
    $('#slider-container').remove();

  }
  function render()
  {
    $('body').append(sliderHTML);
  }
  function createSlider()
  {
    sliderHTML += "<div id='slider-container' style='display:flex;height:500px;'>";
    for (var i = 0; i < sliderData.length; i++) {
      var display = "";
      if(i == 0) {
        display = "display:flex;justify-content:center;";
      } else {
        display = "display:none;";
      }
      sliderHTML += "<div style='width:100%;height:500px;" + display + "'>";
      sliderHTML += "<img src='" + $(sliderData[i])[0].src + "' style='height:100%;'>";
      sliderHTML += "</div>";
    }
    sliderHTML += "</div>";
    sliderHTML += "<button data-action='left'><</button>";
    sliderHTML += "<button data-action='right'>></button>";




  }

});
