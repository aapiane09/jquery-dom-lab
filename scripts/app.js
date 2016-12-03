'use strict';

$( document ).ready(function whenLoaded(){

  // Your jQuery here
  // 1. Get the value "Hello There".
$('#greeting').text();
  // 2. Change (or set) the value to "Hola".
$('#greeting').text('Hola');
  // 3. Add an h1 to the page that says "A Spanish Greeting".
var $newHOne = $('<h1>A Spanish Greeting</h1>');
$('#greeting').prepend($newHOne);
  // 4. Add a second greeting ("Que tal?"), in a second column to the right of the first.
var $newBootstrapDiv = $('<div class=col-sm-6>Que Tal?</div>');
$('.row').append($newBootstrapDiv);
  // 5. Add the class "blue" to both greetings.
$('.col-sm-6').addClass("blue");
});
