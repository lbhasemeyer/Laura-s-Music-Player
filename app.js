$('.tracks').on('click', '.fa-play', function() {
  $(".fa").addClass('fa-play').removeClass('fa-stop');
  $(this).removeClass('fa-play').addClass('fa-stop');
  var playing = $(this).data('title');
  $('h2.select').html("Now Playing:  " + playing);
  $('audio').attr("src", "");
  var id = $(this).data('id');
  var audio = document.getElementById(id);
  audio.src = $(this).data('file');
  audio.play();
});

$('.tracks').on('click', '.fa-stop', function() {
  $(this).addClass('fa-play').removeClass('fa-stop');
  $('h2.select').html("Select a Song!");
  $('audio').attr("src", "");
});

$.getJSON('data.json', function(tracks) {
  var $tracksTemplate = $('#tracksTemplate').html();
  var newHTML = Mustache.to_html($tracksTemplate, tracks);
  $('.tracks').html(newHTML);
});
