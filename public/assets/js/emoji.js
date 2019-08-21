/* eslint-disable no-undef */


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
    $('#happy-emoji-container').show();
    $('#neutral-emoji-container').hide();
    $('#sad-emoji-container').hide();
  });

  //neutral button container
  $('#neutral-btn').click(function() {
    $('#neutral-emoji-container').show();
    $('#happy-emoji-container').hide();
    $('#sad-emoji-container').hide();
  });

  //sad button container
  $('#sad-btn').click(function() {
    $('#sad-emoji-container').show();
    $('#happy-emoji-container').hide();
    $('#neutral-emoji-container').hide();
  });

  // back button
  $('.x-button').click(() => {
      $('.front-window').show();
      $('#happy-emoji-container').hide();
      $('#neutral-emoji-container').hide();
      $('#sad-emoji-container').hide();
  }); 
  
});
