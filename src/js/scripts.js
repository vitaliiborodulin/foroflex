// $(function(){

//   // preloader
//   setTimeout(function() {
//     $(".home").addClass('loaded');
//   }, 1000);
  
//   $('section, .section, .fadeinitem').viewportChecker({
//     offset: 200,
//   });

  
// });



document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.footer__copy').innerHTML = '&copy; ' + new Date().getFullYear() + ' D’OROFLEX';
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});