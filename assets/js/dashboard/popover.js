document.addEventListener("DOMContentLoaded", function () {
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

	popoverTriggerList.forEach(function (popoverTriggerEl) {
		var popover = new bootstrap.Popover(popoverTriggerEl);

		popoverTriggerEl.addEventListener("click", function () {
			setTimeout(() => {
				popover.hide();
			}, 1500);
		});
	});
});
