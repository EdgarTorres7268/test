// Dropdown
const updateDropdown = (bodyElem) => {
	if (bodyElem.classList.contains("active")) {
		bodyElem.style.maxHeight = bodyElem.scrollHeight + "px";
		bodyElem.style.opacity = 1;
	} else {
		bodyElem.style.maxHeight = "0";
		bodyElem.style.opacity = 0;
	}
};

document.addEventListener("DOMContentLoaded", () => {
	const dropdown = document.querySelector("#sticky-menu");
	if (!dropdown) return;
	const dropdownHeader = dropdown.querySelector(".menu-header");
	const dropdownBody = dropdown.querySelector(".menu-body");
	if (!dropdownHeader || !dropdownBody) return;
	dropdownHeader.addEventListener("click", () => {
		dropdownBody.classList.toggle("active");
		dropdown.classList.toggle("bg-card");
		updateDropdown(dropdownBody);
	});
});
