document.addEventListener("DOMContentLoaded", function () {
	const animScrollOpacities = document.querySelectorAll(".anim-scroll-opacity");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
				} else {
					entry.target.classList.remove("active");
				}
			});
		},
		{ root: null, rootMargin: "0px", threshold: 0.55 }
	);

	Array.from(animScrollOpacities).forEach((elem) => {
		observer.observe(elem);
	});
});
