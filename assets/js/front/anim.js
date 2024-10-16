document.addEventListener("DOMContentLoaded", function () {
	const animScrollOpacities = document.querySelectorAll(".anim-scroll-opacity");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
				} else {
					// entry.target.classList.remove("active");
				}
			});
		},
		{ root: null, rootMargin: "0px", threshold: 0.2 }
	);

	Array.from(animScrollOpacities).forEach((elem) => {
		observer.observe(elem);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	let currentCarousel = 0;
	const carouselPrevBtn = document.querySelector(".carousel-prev");
	const carouselNextBtn = document.querySelector(".carousel-next");
	const carouselBody = document.querySelector(".carousel");
	const totalItems = carouselBody.children.length;
	const itemsToShow = carouselBody.dataset.itemCnt;

	for (const elem of carouselBody.children) elem.classList.add("col-" + 12 / itemsToShow);

	const updateCarouselPosition = () => {
		carouselBody.style.transform = `translateX(-${(100 / itemsToShow) * currentCarousel}%)`;
	};

	updateCarouselPosition();

	const updateButtonStates = () => {
		const isAtStart = currentCarousel === 0;
		const isAtEnd = currentCarousel >= totalItems - itemsToShow;

		carouselPrevBtn.classList.toggle("anim-hover-scale", !isAtStart);
		carouselPrevBtn.classList.toggle("text-light", isAtStart);

		carouselNextBtn.classList.toggle("anim-scale", !isAtEnd);
		carouselNextBtn.classList.toggle("text-light", isAtEnd);
	};

	carouselPrevBtn.addEventListener("click", () => {
		if (currentCarousel > 0) {
			currentCarousel--;
			updateCarouselPosition();
			updateButtonStates();
		}
	});

	carouselNextBtn.addEventListener("click", () => {
		if (currentCarousel < totalItems - itemsToShow) {
			currentCarousel++;
			updateCarouselPosition();
			updateButtonStates();
		}
	});

	updateButtonStates();
});
