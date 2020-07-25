/* global $, window */

$(function () {


    ////////////////// adjust navbar style on scroll

    $(window).scroll(function() {

        if($(this).scrollTop() > 75) { 

            $('.navbar').addClass('scrolled');

        } else {

            $('.navbar').removeClass('scrolled');

        }

     });

    ///////////////// copyrights year
    document.getElementById("year").innerHTML = new Date().getFullYear();


     /////////////// typewriter effect
    function tapeWriter() {
      if (i < message.length) {
        
        $('.js-typewriter').append(message[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }
   
    var message = ' Welcome in october castle';
    var i = 0; 
    var interval = setInterval(tapeWriter, 80);

    //activate wow js
    new WOW().init();
                                      
});