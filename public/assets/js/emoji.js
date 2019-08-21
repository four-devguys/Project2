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
  
  //hides the modal by default
  $('.modal').hide();
  //setting a global variable
  var id, name, emoji, emojiInfo;
  //if the user clicks on the emoji, a modal will appear with its info   
  $(".emoji-info").click((e) => {
    // var id = $(".emoji-info").attr("data-id");
     id = $(e.target).attr("data-id");
     name = $(e.target).attr("data-name");
     emoji = $(e.target).text();
     emojiInfo = {
        id: id,
        name: name,
        emoji: emoji
    }
    $.ajax({
        type: "GET",
        data: emojiInfo
    })
    .then(function(){
        // console.log(name, emoji, id)

       // to fade in (show) the modal in 1 sec
        $('.modal').fadeIn(1000);
        $('p').text(emoji);
        $('#confirm-btn').text('Confirm');
    });

  });

  //close button for the modal
  $('#close-btn').click(() => {
    // to fade out (hide) the modal in 0.6 sec
  $('.modal').fadeOut(600);
  });

  $('#confirm-btn').click(() => {
    $('#close-btn').hide();
    $('.modal-title').text("You just clicked " + emoji);
    $('.modal-body').html('<form>' +
    '<div class="form-group"><div class="form-group">' + 
      '<label for="exampleFormControlTextarea1">Write down what happened:</label>' +
      '<textarea class="form-control" id="comment" rows="5"></textarea>' +
    '</div>');
    $('#confirm-btn').html('<i class="far fa-paper-plane"></i> Submit');
  });

});
