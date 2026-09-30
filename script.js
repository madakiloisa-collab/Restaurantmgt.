/* MOBILE SIDEBAR */

const menuButton = document.getElementById("menuButton");
const sidebar = document.querySelector(".sidebar");

if (menuButton && sidebar) {

    menuButton.addEventListener("click", function () {

        sidebar.classList.toggle("menu-open");

        const menuIsOpen =
            sidebar.classList.contains("menu-open");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

        menuButton.textContent =
            menuIsOpen ? "✕" : "☰";

    });

    const sidebarLinks =
        document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            sidebar.classList.remove("menu-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });

}


/* INVENTORY FILTERS */

const inventoryFilters =
    document.querySelectorAll(".inventory-filter");

const inventoryRows =
    document.querySelectorAll(".inventory-table tbody tr");

inventoryFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedCategory =
            filter.textContent.trim();

        inventoryFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        inventoryRows.forEach(function (row) {

            const category =
                row.children[1]?.textContent.trim();

            if (
                selectedCategory === "All Items" ||
                category === selectedCategory
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});


/* ORDERS FILTERS */

const orderFilters =
    document.querySelectorAll(".order-filter");

const orderRows =
    document.querySelectorAll(".orders-table tbody tr");

orderFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedType =
            filter.textContent.trim();

        orderFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        orderRows.forEach(function (row) {

            const orderType =
                row.children[2]?.textContent.trim();

            if (
                selectedType === "All Orders" ||
                orderType === selectedType
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});


/* PAYMENT FILTERS */

const paymentFilters =
    document.querySelectorAll(".payment-filter");

const paymentRows =
    document.querySelectorAll(".payments-table tbody tr");

paymentFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedMethod =
            filter.textContent.trim();

        paymentFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        paymentRows.forEach(function (row) {

            const paymentMethod =
                row.children[2]?.textContent.trim();

            if (
                selectedMethod === "All Payments" ||
                paymentMethod === selectedMethod
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});


/* STAFF FILTERS */

const staffFilters =
    document.querySelectorAll(".staff-filter");

const staffRows =
    document.querySelectorAll(".staff-table tbody tr");

staffFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedStatus =
            filter.textContent.trim();

        staffFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        staffRows.forEach(function (row) {

            const status =
                row.lastElementChild?.textContent.trim();

            if (
                selectedStatus === "All Staff" ||
                status === selectedStatus
            ) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});


/* MENU FILTERS */

const menuFilters =
    document.querySelectorAll(".menu-filter");

const menuItems =
    document.querySelectorAll(".menu-item");

menuFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedCategory =
            filter.textContent.trim();

        menuFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filter.classList.add("active");

        menuItems.forEach(function (item) {

            const category =
                item.dataset.category ||
                item.querySelector(".menu-category")?.textContent.trim();

            if (
                selectedCategory === "All Items" ||
                category === selectedCategory
            ) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

});


/* TABLE STATUS */

const tableCards =
    document.querySelectorAll(".management-table-card");

tableCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const statusElement =
            card.querySelector(".management-table-status");

        if (!statusElement) {
            return;
        }

        const currentStatus =
            statusElement.textContent.trim();

        if (currentStatus === "Available") {

            statusElement.textContent = "Occupied";

            card.classList.remove("available");
            card.classList.add("occupied");

        } else if (currentStatus === "Occupied") {

            statusElement.textContent = "Available";

            card.classList.remove("occupied");
            card.classList.add("available");

        }

    });

});


/* INVENTORY STOCK STATUS */

const stockRows =
    document.querySelectorAll(".inventory-table tbody tr");

stockRows.forEach(function (row) {

    const quantityCell = row.children[2];
    const statusElement =
        row.querySelector(".inventory-status");

    if (!quantityCell || !statusElement) {
        return;
    }

    const quantityText =
        quantityCell.textContent.trim();

    const quantity =
        parseFloat(quantityText);

    if (isNaN(quantity)) {
        return;
    }

    if (quantity === 0) {

        statusElement.textContent = "Out of Stock";

        statusElement.classList.remove(
            "in-stock",
            "low-stock"
        );

        statusElement.classList.add("out-stock");

    }

});


/* SEARCH*/

const searchInputs =
    document.querySelectorAll(
        'input[type="search"], .search-input'
    );

searchInputs.forEach(function (input) {

    input.addEventListener("input", function () {

        const searchValue =
            input.value.toLowerCase().trim();

        const pageRows =
            document.querySelectorAll(
                "table tbody tr"
            );

        pageRows.forEach(function (row) {

            const rowText =
                row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

});


/* SETTINGS TOGGLES */

const settingsToggles =
    document.querySelectorAll(".toggle input");

settingsToggles.forEach(function (toggle) {

    toggle.addEventListener("change", function () {

        console.log(
            "Setting changed:",
            toggle.checked
        );

    });

});


/* SAVE SETTINGS */

const saveSettings =
    document.querySelector(".save-settings");

if (saveSettings) {

    saveSettings.addEventListener("click", function () {

        alert("Settings saved successfully.");

    });

}


/* CANCEL SETTINGS */

const cancelSettings =
    document.querySelector(".cancel-settings");

if (cancelSettings) {

    cancelSettings.addEventListener("click", function () {

        const settingsInputs =
            document.querySelectorAll(
                ".settings-field input, .settings-field select"
            );

        settingsInputs.forEach(function (input) {
            input.value = input.defaultValue;
        });

        alert("Changes cancelled.");

    });

}


/* LOGOUT */

const logoutLink =
    document.querySelector(
        '.sidebar-bottom a[href="#"]'
    );

if (logoutLink) {

    logoutLink.addEventListener("click", function (event) {

        event.preventDefault();

        const confirmLogout =
            confirm("Are you sure you want to log out?");

        if (confirmLogout) {
            window.location.href = "index.html";
        }

    });

}


/* NOTIFICATIONS */

const notificationButton =
    document.querySelector(".notification-button");

if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        function () {

            alert(
                "You have 3 new notifications."
            );

        }
    );

}


/* COMPLAINT STATUS */

const complaintStatuses =
    document.querySelectorAll(".complaint-status");

complaintStatuses.forEach(function (status) {

    status.addEventListener("click", function () {

        const currentStatus =
            status.textContent.trim();

        if (currentStatus === "Unresolved") {

            status.textContent = "Resolved";

        }

    });

});


/* ORDER STATUS */

const orderStatuses =
    document.querySelectorAll(".order-status");

orderStatuses.forEach(function (status) {

    status.addEventListener("click", function () {

        const currentStatus =
            status.textContent.trim();

        if (currentStatus === "Pending") {

            status.textContent = "Preparing";

        } else if (currentStatus === "Preparing") {

            status.textContent = "Ready";

        } else if (currentStatus === "Ready") {

            status.textContent = "Completed";

        }

    });

});


/* MENU AVAILABILITY */

const menuAvailability =
    document.querySelectorAll(".menu-availability");

menuAvailability.forEach(function (status) {

    status.addEventListener("click", function () {

        const currentStatus =
            status.textContent.trim();

        if (currentStatus === "Available") {

            status.textContent = "Unavailable";

        } else if (currentStatus === "Unavailable") {

            status.textContent = "Available";

        }

    });

});


/* GENERAL BUTTON FEEDBACK */

const actionButtons =
    document.querySelectorAll(
        ".add-button, .primary-button, .action-button"
    );

actionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log(
            button.textContent.trim(),
            "clicked"
        );

    });

});