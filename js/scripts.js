var main = function() {

		$('.clickMe').click(function() {
			$('.info').removeClass('hidden');
			$('.rm'). addClass('hidden');

		});

}
$(document).ready(main);