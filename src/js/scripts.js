document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.footer__copy').innerHTML = '&copy; ' + new Date().getFullYear() + ' D’OROFLEX';
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});

