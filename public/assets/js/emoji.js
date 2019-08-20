

$(document).ready(function(){

  function getUsers() {
    $.get("/api/users", function(data) {
      // console.log(data[0].id)
      // console.log(data[0].umoji[0].user_emojis.user_id)

      // console.log(data[0].umoji.length)

      // for(var i = 0; i <= (data[0].umoji).length; i++){
      //   if(data[0].id == data[0].umoji[0].user_emojis.user_id){
      //     console.log(data[0].umoji[i].polarity)
      //   }
      // }

      // console.log(data[0].umoji[0].polarity)
      // console.log(data[0].umoji[1].polarity)
      // console.log(data[0].umoji[2].polarity)
    });
  }

  getUsers();

  // front window will appear first
  $('.front-window').show();

  //three containers for the button are hidden by default
  $('#happy-emoji-container').hide();
  $('#neutral-emoji-container').hide();
  $('#sad-emoji-container').hide();

  //happy button function
  $('#happy-btn').click(function() {
      $('.front-window').hide();
      $('#happy-emoji-container').show();
      $("#happy-emoji-container").css({
          "display" : "block",
          "position" : "absolute",
          "top" : "50px",
          "left" : "50px",
          "transform" : "translate(-50px, -50px)"
      });
  });

  //neutral button container
  $('#neutral-btn').click(function() {
      $('.front-window').hide();
      $('#neutral-emoji-container').show();
      $("#neutral-emoji-container").css({
          "display" : "block",
          "position" : "absolute",
          "top" : "50px",
          "left" : "50px",
          "transform" : "translate(-50px, -50px)"
      });
  });

  //sad button container
  $('#sad-btn').click(function() {
      $('.front-window').hide();
      $('#sad-emoji-container').show();
      $("#sad-emoji-container").css({
          "display" : "block",
          "position" : "absolute",
          "top" : "50px",
          "left" : "50px",
          "transform" : "translate(-50px, -50px)"
      });
  });

  // back button
  $('.back-button').click(() => {
      $('.front-window').show();
      $('#happy-emoji-container').hide();
      $('#neutral-emoji-container').hide();
      $('#sad-emoji-container').hide();
  }); 


});
