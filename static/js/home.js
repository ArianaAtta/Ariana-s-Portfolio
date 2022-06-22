$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat Ariana.portfolio<br/>" + 
      "><span class='caret'>$</span> skills: javascript, python, html, elm, and learning css <br/> ^100" +
      "><span class='caret'>$</span> hobbies: piano, guitar, reading, soccer, volleyball, badminton, and photography <br/> ^100" +
      "><span class='caret'>$</span> wants: to learn different programming skills and apply them to create new neat and inspiring projects"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
