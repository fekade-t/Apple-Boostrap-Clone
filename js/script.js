// $(".shopBottun").on("click", function () {
//   if ($(window).width() < "768px") {
//     $(".shopSlide").slideToggle();
//   } else return $(".shopBottun").show();
// // });
// if ($(window).width() <= 768) {
//   $(".footer-links-wrapper").addClass("someClass");
// } else {
//   $(".footer-links-wrapper").removeClass("someClass");
// }
// $(window).on("resize", function () {
//   if ($(window).width() <= 768) {
//     $(".footer-links-wrapper").addClass("someClass");
//   } else {
//     $(".footer-links-wrapper").removeClass("someClass");
//     $(".footer-links-wrapper ul").show();
//   }
// });

// $(document).on("click", ".someClass h3", function () {
//   $(this).next("ul").slideToggle("expanded");
//   //$(this).next("ul").toggleClass("expanded");
//   $(this).next("ul").toggleClass("aa");
// });

if ($(window).width() <= 768) {
  $(".footer-links-wrapper").addClass("someClass");
} else {
  $(".footer-links-wrapper").removeClass("someClass");
}
$(window).on("resize", function (event) {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("someClass");
  } else {
    $(".footer-links-wrapper").removeClass("someClass");
    $(".footer-links-wrapper ul").show();
  }
});
// Footer collapse functionality
$(document).on("click", ".someClass h3", function () {
  $(this).next("ul").slideToggle();
  $(this).toggleClass("expanded");
  $(this).toggleClass("aa"); //  this is for chaange the cross sign to x
});
