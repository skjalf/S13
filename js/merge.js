$(function() {
  $.vegas('slideshow', {
    backgrounds: [
      {src: '/img/WebsiteBanner.jpg', valign: 'center'},
      {src: '/img/cloud3.png', valign: 'top'}
    ],
    preload: true
  })
  ('overlay', {src: '/js/vegas/overlays/13.png'});

  $('.navbar').scrollspy();
});
