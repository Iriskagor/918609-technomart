document.addEventListener("DOMContentLoaded", function(){
  var listButtons = document.getElementsByClassName('services__list__button');
  for (var i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener('click', function(e){
      var target = e.target
      var id = target.getAttribute('data-id');
      for (var j = 0; j < listButtons.length; j++) {
        listButtons[j].className = "services__list__button";
      }
      target.className = "services__list__button active";
      var descriptions = document.getElementsByClassName('services__items__description')
      for (var k = 0; k < descriptions.length; k++) {
        descriptions[k].className = "services__items__description";
      }
      document.getElementById(id).className = "services__items__description active";
    });
  };
  var openMap = document.querySelector('.information__map');
  if (openMap){
    openMap.addEventListener('click', function(e){
      e.preventDefault();
      var popup = document.querySelector('.information__map-popup');
      popup.className = "information__map-popup";
      if (!document.querySelector('#google-map')){
        popup.innerHTML += '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5991043651586!2d30.320894616097!3d59.938794181876254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1547578819963" id="google-map" width="940" height="447" frameborder="0" style="border:0" allowfullscreen></iframe>';
      }
      var closeMap = document.querySelector('.information__map-popup__btn-close');
      if (closeMap){
        closeMap.addEventListener('click', function(){
          document.querySelector('.information__map-popup').className = "information__map-popup visually-hidden";
        })
      }
    })
  }

  var openInfo = document.querySelector('.open-information-popup');
  if (openInfo){
    openInfo.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('.information__writeus').className = "information__writeus modal--show";
    })
  }

  var login = document.querySelector('[name=writeus-name]');
  var mail = document.querySelector('[name=writeus-mail]');
  var message = document.querySelector('[name=writeus-message]')
  var form = document.querySelector('.information__writeus__form');
  var modal = document.querySelector('.information__writeus');

  if (form){
    form.addEventListener('submit', function (evt) {
      if (!login.value || !mail.value || !message.value) {
        evt.preventDefault();
        modal.classList.remove('modal--error');
        modal.classList.add('modal--error');
      }
    });
  }

  var closeInfo = document.querySelector('.information__writeus__btn-close')
  if (closeInfo){
    closeInfo.addEventListener('click', function(){
      document.querySelector('.information__writeus').className = "information__writeus";
    })
  }

  var addToCartButtons = document.getElementsByClassName('product-list__card__buy');
  if (addToCartButtons.length > 0){
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.addtocard__popup').classList.remove('visually-hidden');
      })
    }
  }

  var addToCartClose = document.querySelector('.addtocard__popup__btn-close');
  if (addToCartClose){
    addToCartClose.addEventListener('click', function(){
      document.querySelector('.addtocard__popup').classList.add('visually-hidden');
    })
  }

  var continueShopping = document.querySelector('.addtocard__wrapper__btn');
  if (continueShopping){
    continueShopping.addEventListener('click', function(){
      document.querySelector('.addtocard__popup').classList.add('visually-hidden');
    })
  }
});
