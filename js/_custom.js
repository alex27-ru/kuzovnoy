$(function () {

// мой код моодальных окон
// .modal__close нужно добавлять к крестику зарытия окна
// data-click="класс" пишем в кнопку открывающую окно "класс"

// $('.modal__close').on('click', function () {
// 	$(this).parent().removeClass('modal-active');
// 	$('.modal').removeClass('modal-active-flex');
// });
// $('.modal').on('click', function () {
// 	$('.modal').removeClass('modal-active-flex');
// 	$('.thanks').removeClass('modal-active');
// 	$('.call-back').removeClass('modal-active');
// 	$('.fast-request').removeClass('modal-active');
// });

// $('[data-click]').on('click', function () {
// 	var cl = $(this).attr('data-click');
// 	$('.modal').addClass('modal-active-flex');
// 	$('.' + cl).addClass('modal-active');
// });
// конец моего кода модальных окно

//magnific popup
$('.call__btn').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
  items: {
      src: '#call-back',
      type: 'inline'
  }
});
$('.fast-btn').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
  items: {
      src: '#fast-request',
      type: 'inline'
  }
});

//тестовый код благодарности за заявку
$('.send-btn').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade',
  items: {
      src: '#thanks',
      type: 'inline'
  }
});

$('a').smoothScroll(); // smoothScroll на все ссылки

// script mail
//E-mail Ajax Send
	// $("form").submit(function() { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		alert("Thank you!");

//код благодарности за заявку вместо тестового
//   $('.send-btn').magnificPopup({
//     removalDelay: 300,
//     mainClass: 'mfp-fade',
//   items: {
//       src: '#thanks',
//       type: 'inline'
//   }
// });

	// 		setTimeout(function() {
	// 			// Done Functions
	// 			th.trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });



});
