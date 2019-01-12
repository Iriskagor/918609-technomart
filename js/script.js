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
  var openMap = document.querySelector('.information__map');
  if (openMap){
    openMap.addEventListener('click', function(){
      document.querySelector('.information__map-popup').className = "information__map-popup";
    })
  }
  var closeMap = document.querySelector('.information__map-popup__btn-close');
  if (closeMap){
    closeMap.addEventListener('click', function(){
      document.querySelector('.information__map-popup').className = "information__map-popup visually-hidden";
    })
  }

  var openInfo = document.querySelector('.open-information-popup');
  if (openInfo){
    openInfo.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('.information__writeus').className = "information__writeus";
    })
  }

  var closeInfo = document.querySelector('.information__writeus__btn-close')
  if (closeInfo){
    closeInfo.addEventListener('click', function(){
      document.querySelector('.information__writeus').className = "information__writeus visually-hidden";
    })
  }

  var addToCartButtons = Array.from(document.getElementsByClassName('product-list__card__buy'));
  console.log(addToCartButtons.length);
  if (addToCartButtons.length > 0){
    addToCartButtons.forEach(function(el){
      el.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.addtocard__popup').classList.remove('visually-hidden');
      })
    })
  }

  var addToCartClose = document.querySelector('.addtocard__popup__btn-close');
  if (addToCartClose){
    addToCartClose.addEventListener('click', function(){
      document.querySelector('.addtocard__popup').classList.add('visually-hidden');
    })
  }

  var continueShopping = document.querySelector('.addtocard__buttons__wrapper button');
  if (continueShopping){
    continueShopping.addEventListener('click', function(){
      document.querySelector('.addtocard__popup').classList.add('visually-hidden');
    })
  }
});
