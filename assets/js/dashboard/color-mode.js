document.addEventListener("DOMContentLoaded", (event) => {
	const htmlElement = document.documentElement;
	const switchElement = document.getElementById("mode-switch-wrapper");
	const switchBtn = document.getElementById("mode-switch");

	const currentTheme = localStorage.getItem("bsTheme") || "light";
	htmlElement.setAttribute("data-bs-theme", currentTheme);

	switchElement.addEventListener("click", function () {
		if (localStorage.getItem("bsTheme") != "dark") {
			htmlElement.setAttribute("data-bs-theme", "dark");
			switchBtn.classList.add("active");
			localStorage.setItem("bsTheme", "dark");
		} else {
			htmlElement.setAttribute("data-bs-theme", "light");
			switchBtn.classList.remove("active");
			localStorage.setItem("bsTheme", "light");
		}
	});
});
