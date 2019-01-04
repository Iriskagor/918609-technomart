document.addEventListener("DOMContentLoaded", function(){
  Array.from(document.getElementsByClassName('services__list__button')).forEach(function(el){
    el.addEventListener('click', function(e){
      var target = e.target
      var id = target.getAttribute('data-id');
      Array.from(document.getElementsByClassName('services__list__button')).forEach(function(el){
        el.className = "services__list__button"
      });
      target.className = "services__list__button active";
      Array.from(document.getElementsByClassName('services__items__description')).forEach(function(el){
        el.className = "services__items__description"
      });
      document.getElementById(id).className = "services__items__description active";
    });
  });

  document.querySelector('.information__map').addEventListener('click', function(){
    document.querySelector('.information__map-popup').className = "information__map-popup";
  })

  document.querySelector('.information__map-popup__btn-close').addEventListener('click', function(){
    document.querySelector('.information__map-popup').className = "information__map-popup visually-hidden";
  })

  document.querySelector('.open-information-popup').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.information__writeus').className = "information__writeus";
  })

  document.querySelector('.information__writeus__btn-close').addEventListener('click', function(){
    document.querySelector('.information__writeus').className = "information__writeus visually-hidden";
  })
});
