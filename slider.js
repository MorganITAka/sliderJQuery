$(document).ready(function(){
  var sliderHTML = "";
  var sliderData;
  var height = "500";

  initializeSlider();
  createSlider();
  render();

  function left()
  {
    var previousImage = $('#selected').prev()[0];

    if(previousImage == undefined) {
      previousImage = $('#slider-container div').last()[0];
    }
    $('#selected').css('display', 'none');
    $('#selected').removeAttr('id');

    $(previousImage).css('display', 'flex').css('justify-content', 'center');
    $(previousImage).attr('id', 'selected');
  }
  function right()
  {
    var nextImage = $('#selected').next()[0];
    if(nextImage == undefined) {
      nextImage = $('#slider-container div').first()[0];
    }
    $('#selected').css('display', 'none');
    $('#selected').removeAttr('id');

    $(nextImage).css('display', 'flex').css('justify-content', 'center');
    $(nextImage).attr('id', 'selected');
  }
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
    sliderHTML += "<div id='slider-container' style='display:flex;height:500px;background-color:black;'>";
    sliderHTML += "<button style='background-color:transparent;border:none;font-size:50px;color:white;' data-action='left'><</button>";
    for (var i = 0; i < sliderData.length; i++) {
      var display = "";
      var id = "";
      if(i == 0) {
        display = "display:flex;justify-content:center;";
        id = "selected";
      } else {
        display = "display:none;";
      }
      sliderHTML += "<div id='" + id + "' style='width:100%;height:500px;" + display + "'>";
      sliderHTML += "<img src='" + $(sliderData[i])[0].src + "' style='height:100%;'>";
      sliderHTML += "</div>";
    }
    sliderHTML += "<button style='background-color:transparent;border:none;font-size:50px;color:white;' data-action='right'>></button>";
    sliderHTML += "</div>";


    $('body').on('click', "button[data-action='left']", left);
    $('body').on('click', "button[data-action='right']", right);
  }

});
