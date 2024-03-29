$(() => {
	'use strict';

	const nav = $('.nav');
	const lines = $('.toggle-btn');

	lines.on('click', (n) => {
		nav.hasClass('show-nav') ? nav.removeClass('show-nav') : nav.addClass('show-nav');
		n.stopPropagation();
        
        lines.hasClass('toggle-close') ? lines.removeClass('toggle-close') : lines.addClass('toggle-close');
	}),


	$(document).on('click', () => {
		nav.hasClass('show-nav') && nav.removeClass('show-nav'), lines.hasClass('toggle-close') && lines.removeClass('toggle-close');
	}),

	$(window).on('load resize', () => {

		$(window).width() < 768 && (lines.wrap('<div class="toggle-placeholder"></div>'), $('.toggle-placeholder').height(lines.outerHeight()));

		const o = $('.toggle-btn').offset().top;
		$(window).on('scroll', () => {
			const s = $(window).scrollTop();
			s >= o ? (lines.addClass('fixed'), nav.addClass('stickyNav')) : (lines.removeClass('fixed'), nav.removeClass('stickyNav'));
		});
	});

});
