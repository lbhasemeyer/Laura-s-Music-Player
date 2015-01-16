$('.player').on('click', '.fa-play', function() {
  $(".fa").addClass('fa-play').removeClass('fa-stop');
  $(this).removeClass('fa-play').addClass('fa-stop');
  var playing = $(this).data('title');
  $('h2.select').html("Now Playing:" + playing);
});

$('.player').on('click', '.fa-stop', function() {
  $(this).addClass('fa-play').removeClass('fa-stop');
  $('h2.select').html("Select a Song!");
});

$.getJSON('data.json', function(tracks) {
  var $tracksTemplate = $('#tracksTemplate').html();
  var newHTML = Mustache.to_html($tracksTemplate, tracks);
  $('.tracks').html(newHTML);
});
