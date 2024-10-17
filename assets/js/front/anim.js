document.addEventListener("DOMContentLoaded", () => {
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

// Services Section
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

// FAQ Section
document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".dropdown-container").forEach((card) => {
		card.addEventListener("click", () => {
			const cardBody = card.querySelector(".dropdown-body");
			const cardIcons = card.querySelector(".dropdown-icons");
			const isActive = cardBody.classList.toggle("active");

			cardBody.style.maxHeight = isActive ? `${cardBody.scrollHeight}px` : 0;
			for (let i = 0; i < cardIcons.children.length; i++) {
				const moveAmount = window.getComputedStyle(cardIcons).maxHeight;
				cardIcons.children[i].style.transform = isActive ? `translateY(-${moveAmount})` : `translateY(0)`;
			}
		});
	});
});

// Testimonial Section
document.addEventListener("DOMContentLoaded", () => {
	var activeNth = 0;

	const testimonialWrapper = document.querySelector(".testimonial-wrapper");
	const testimonialList = testimonialWrapper.querySelector(".testimonial-list");
	const testimonialBtn = testimonialWrapper.querySelectorAll(".testimonial-btn");
	const itemsCnt = testimonialList.children.length;

	for (let i = 0; i < itemsCnt; i++) {
		const list = testimonialList.children[i];
		if (activeNth != i) list.style.transform = "scale(0.9)";
		else list.style.transform = "scale(1)";
		list.style.transformOrigin = "60% 50%";
		list.classList.add("anim-lg");
	}

	for (let i = 0; i < testimonialBtn.length; i++) {
		testimonialBtn[i].addEventListener("click", () => {
			activeNth = i;
			updateButtons();
			updateList();
		});
	}

	const updateList = () => {
		testimonialList.style.transform = `translateX(-${50 * Math.max(0, activeNth - 1)}%)`;
		for (let i = 0; i < itemsCnt; i++) {
			const list = testimonialList.children[i];
			if (activeNth != i) list.style.transform = "scale(0.9)";
			else list.style.transform = "scale(1)";
			list.style.transformOrigin = "60% 50%";
		}
	};

	const updateButtons = () => {
		for (let i = 0; i < testimonialBtn.length; i++) {
			if (i == activeNth) {
				testimonialBtn[i].classList.add("active-btn");
			} else {
				testimonialBtn[i].classList.remove("active-btn");
			}
		}
	};

	// const testimonialBtn = document.createElement("div");
	// testimonialBtn.classList.add("d-flex", "justify-content-center", "gap-4");
	// for (let i = 0; i < itemsCnt; i++) {
	// 	const btn = document.createElement('button')
	// 	btn.classList.add("anim anim-scroll-opacity")

	// }

	// testimonialWrapper.appendChild(testimonialBtn);
});
