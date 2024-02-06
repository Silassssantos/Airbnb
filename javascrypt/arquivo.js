document.getElementById('myDiv').addEventListener('click', function(event) {
    document.getElementById('map').style.display = 'block';
    event.stopPropagation(); // Isso impede que o evento de clique se propague para o documento
  });
  
  document.addEventListener('click', function() {
    document.getElementById('map').style.display = 'none';
  });

  document.getElementById('login').addEventListener('click', function(){
    var div = document.getElementById('menu-suspenso');
    if (div.style.display !== 'none') {
      div.style.display = 'none';
    } else {
      div.style.display = 'block';
    }
    event.stopPropagation();
  })
  document.addEventListener('click', function() {
    document.getElementById('menu-suspenso').style.display = 'none';});

  
    $(function() {
      $("#meuSlider").roundSlider({
        sliderType: "min-range",
        handleShape: "round",
        width: 22,
        radius: 100,
        min: 1,
        max: 12,
        value: 1
      });
    });

