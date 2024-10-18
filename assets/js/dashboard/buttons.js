function alertAction() {
	const alertCloseButtons = document.querySelectorAll(".btn-alert-close");
	const alertDialogs = document.querySelectorAll(".alert-dlg");
	for (const alertCloseBtn of alertCloseButtons) {
		alertCloseBtn.addEventListener("click", () => {
			for (const alertDialog of alertDialogs) {
				if (alertDialog.contains(alertCloseBtn)) {
					alertDialog.style.opacity = 0;
					alertDialog.style.transform = "translateX(-60px)";
					alertDialog.style.transition = "all 0.4s ease-in-out";
					setTimeout(() => {
						alertDialog.style.transition = "all 1.2s ease-in-out";
						alertDialog.style.padding = 0;
						alertDialog.style.margin = 0;
						alertDialog.style.maxHeight = 0;
					}, 200);
				}
			}
		});
	}
}

function dropdownAction() {
	const dropdownButtons = document.querySelectorAll(".fa-chevron-down");
	for (const dropdownBtn of dropdownButtons) {
		const dropdownWrapper = dropdownBtn.parentElement;
		const dropdownSelect = dropdownWrapper.querySelector(".form-select");
		dropdownBtn.addEventListener("click", () => {
			console.log(dropdownSelect);
			dropdownSelect.focus();
			dropdownSelect.click();
		});
	}
}

dropdownAction();
alertAction();

// const refreshBtns = document.getElementsByClassName("btn-refresh");

// for (const refreshBtn of refreshBtns) {
// 	const icon = refreshBtn.querySelector("i");
// 	icon.style.transition = "all 1s ease-in";
// 	refreshBtn.addEventListener("click", function () {
// 		icon.style.transform = "rotate(720deg)";
// 		setTimeout(function () {
// 			icon.style.transition = null;
// 			icon.style.transform = null;
// 		}, 1000);
// 		icon.style.transition = "all 1s ease";
// 	});
// }

// const filterBtn = document.querySelector(".btn-filter");
// const filterMenu = document.getElementById("filter-menu");

// if (filterBtn)
// 	filterBtn.addEventListener("click", function () {
// 		if (filterMenu.classList.contains("show")) filterMenu.classList.remove("show");
// 		else filterMenu.classList.add("show");
// 	});

// if (filterMenu)
// 	filterMenu.addEventListener("click", function (event) {
// 		event.stopPropagation();
// 	});

// if (filterBtn && filterMenu)
// 	document.addEventListener("click", function (event) {
// 		if (!filterMenu.contains(event.target) && !filterBtn.contains(event.target)) {
// 			filterMenu.classList.remove("show");
// 		}
// 	});

const favButtons = document.getElementsByClassName("btn-favorite");
for (const favBtn of favButtons) {
	favBtn.addEventListener("click", function () {
		if (favBtn.classList.contains("text-black")) {
			favBtn.classList.remove("text-black");
			favBtn.classList.add("text-warning");
		} else {
			favBtn.classList.add("text-black");
			favBtn.classList.remove("text-warning");
		}
	});
}

// const copyBtns = document.querySelectorAll(".btn-copy");
// if (copyBtns) {
// 	for (const copyBtn of copyBtns) {
// 		copyBtn.addEventListener("click", function () {
// 			const textToCopy = document.getElementById("copy-text") ? document.getElementById("copy-text").value || document.getElementById("copy-text").innerText : copyBtn.parentElement.innerText;
// 			console.log(textToCopy);
// 			navigator.clipboard.writeText(textToCopy);
// 		});
// 	}
// }

// const toggleSocialBtn = document.getElementById("btn-toggle-social");
// const toggleContent = document.querySelector(".toggle-div");
// if (toggleSocialBtn) {
// 	toggleSocialBtn.addEventListener("change", function () {
// 		if (toggleSocialBtn.checked) {
// 			toggleContent.style.maxHeight = "300px";
// 			toggleContent.style.marginTop = "1rem";
// 			toggleContent.style.paddingTop = "1rem";
// 			toggleContent.style.paddingBottom = "1rem";
// 		} else {
// 			toggleContent.style.maxHeight = "0px";
// 			toggleContent.style.marginTop = "0rem";
// 			toggleContent.style.paddingTop = "0rem";
// 			toggleContent.style.paddingBottom = "0rem";
// 		}
// 	});
// }

// const btnPaginationPrev = document.getElementById("btn-pagination-prev");
// const btnPaginationNext = document.getElementById("btn-pagination-next");
// const inputPagination = document.getElementById("input-pagination");
// if (btnPaginationNext && btnPaginationPrev) {
// 	const refTable = inputPagination.dataset.tableFor;
// 	const dataTable = document.querySelector(refTable) || document.querySelector("tbody");
// 	let dataCnt = 0,
// 		dataPerPage = 0;
// 	if (dataTable) {
// 		dataCnt = dataTable.children.length;
// 		dataPerPage = parseInt(dataTable.dataset.perPage) || 4;
// 		btnPaginationPrev.disabled = true;
// 		btnPaginationPrev.style.opacity = 0.5;
// 		if (dataCnt <= dataPerPage) {
// 			btnPaginationNext.style.opacity = 0.5;
// 			btnPaginationNext.disabled = true;
// 		}
// 	}
// 	for (let i = 0; i < dataCnt; i++) {
// 		if (i >= (inputPagination.value - 1) * dataPerPage && i < inputPagination.value * dataPerPage) dataTable.children[i].style.display = "table-row";
// 		else dataTable.children[i].style.display = "none";
// 	}
// 	btnPaginationPrev.addEventListener("click", function () {
// 		if (inputPagination.value > 1) {
// 			inputPagination.value = inputPagination.value - 1;
// 			const event = new Event("change");
// 			inputPagination.dispatchEvent(event);
// 		}
// 	});
// 	btnPaginationNext.addEventListener("click", function () {
// 		if (inputPagination.value < Math.ceil(dataCnt / dataPerPage)) {
// 			inputPagination.value = parseInt(inputPagination.value) + 1;
// 			const event = new Event("change");
// 			inputPagination.dispatchEvent(event);
// 		}
// 	});
// 	inputPagination.addEventListener("change", function () {
// 		if (inputPagination.value * dataPerPage > dataCnt + dataPerPage) inputPagination.value = Math.ceil(dataCnt / dataPerPage);
// 		if (inputPagination.value == 1) {
// 			btnPaginationPrev.disabled = true;
// 			btnPaginationPrev.style.opacity = 0.5;
// 		} else {
// 			btnPaginationPrev.disabled = false;
// 			btnPaginationPrev.style.opacity = 1;
// 		}
// 		if (inputPagination.value == Math.ceil(dataCnt / dataPerPage)) {
// 			btnPaginationNext.style.opacity = 0.5;
// 			btnPaginationNext.disabled = true;
// 		} else {
// 			btnPaginationNext.style.opacity = 1;
// 			btnPaginationNext.disabled = false;
// 		}
// 		for (let i = 0; i < dataCnt; i++) {
// 			if (i >= (inputPagination.value - 1) * dataPerPage && i < inputPagination.value * dataPerPage) dataTable.children[i].style.display = "table-row";
// 			else dataTable.children[i].style.display = "none";
// 		}
// 	});
// }
