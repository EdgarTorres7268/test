document.addEventListener("DOMContentLoaded", function () {
	function setWChildWidth() {
		const sxCildElems = document.querySelectorAll(".sx-child");
		for (const elem of sxCildElems)
			if (elem.hasChildNodes) {
				elem.style.maxWidth = window.getComputedStyle(elem.children[0]).width;
				elem.style.maxHeight = window.getComputedStyle(elem.children[0]).height;
			}
	}
	setWChildWidth();
});
