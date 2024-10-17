const button = document.getElementById("myButton");
const div = document.getElementById("myDiv");

button.addEventListener("click", () => {
	// Start the transition by changing the transform property
	div.style.transform = "translateX(100px)";

	// Add an event listener for the transition end
	div.addEventListener(
		"transitionend",
		() => {
			// Check if the current transform property is applied
			if (div.style.transform === "translateX(100px)") {
				// Change to 0 before adding 'active' class
				div.style.transform = "translateX(50px)";
				// Add 'active' class when the transform is 0
				div.classList.add("active");
			}
		},
		{ once: true }
	); // The { once: true } option ensures this listener runs only once
});
