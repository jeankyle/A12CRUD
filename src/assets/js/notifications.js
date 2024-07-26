document.addEventListener("DOMContentLoaded", function () {
    // Get all notification elements
    const notifications = document.querySelectorAll('[id^="notification"]');
    const errors = document.querySelectorAll('[id^="error"]');

    // Set timeout for each notification based on its index
    notifications.forEach((notification, index) => {
        const timeout = (index + 1) * 2000; // Adjust the multiplier as needed
        setTimeout(function () {
            notification.style.display = 'none';
        }, timeout);
    });

    // Set timeout for each error based on its index
    errors.forEach((error, index) => {
        const timeout = (index + 1) * 2000; // Adjust the multiplier as needed
        setTimeout(function () {
            error.style.display = 'none';
        }, timeout);
    });

    // Set timeout for pop_up_error div
    const popUpError = document.getElementById("pop_up_error");
    if (popUpError) {
        setTimeout(function () {
            popUpError.style.display = 'none';
        }, 5000); // Adjust the timeout duration as needed
    }

    // Set timeout for pop_up_message div
    const popUpMessage = document.getElementById("pop_up_message");
    if (popUpMessage) {
        setTimeout(function () {
            popUpMessage.style.display = 'none';
        }, 5000); // Adjust the timeout duration as needed
    }
});

// JavaScript to control dropdowns
document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdown buttons
    var dropdownButtons = document.querySelectorAll(".dropdown-toggle");

    // Add click event listeners to each dropdown button
    dropdownButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents the document click listener from firing immediately
            toggleDropdownMenu(this); // Toggle the dropdown menu
        });
    });

    // Add a click event listener to the document to close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        // Check if the clicked element is not inside any dropdown menu
        if (!event.target.closest(".dropdown-menu")) {
            // Close all dropdown menus
            var dropdownMenus = document.querySelectorAll(".dropdown-menu");
            dropdownMenus.forEach(function (menu) {
                menu.classList.remove("show");
            });

            // Reset aria-expanded attribute for all dropdown buttons
            dropdownButtons.forEach(function (button) {
                button.setAttribute("aria-expanded", "false");
            });
        }
    });

    function toggleDropdownMenu(button) {
        var dropdownMenu = button.nextElementSibling;
        if (dropdownMenu.classList.contains("show")) {
            dropdownMenu.classList.remove("show");
            button.setAttribute("aria-expanded", "false");
        } else {
            dropdownMenu.classList.add("show");
            button.setAttribute("aria-expanded", "true");
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all close buttons inside modals
    var closeButtons = document.querySelectorAll('[data-dismiss="modal"]');

    // Add click event listener to each close button
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Find the modal content
            var modal = button.closest('.modal-content');

            // Check if the modal is for editing
            var isEditModal = modal.closest('[id^="edit-modal"]');

            // If it's an edit modal, return early and do not clear the form
            if (isEditModal) {
                return;
            }

            // Find all form elements inside the modal content
            var formInputs = modal.querySelectorAll('input, textarea, select');

            // Clear the value of each form element
            formInputs.forEach(function (input) {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
        });
    });
});

function disableButton() {
    // Get all forms
    const forms = document.querySelectorAll('form');

    // Loop through each form and add event listener
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Disable all submit buttons in the form
            const submitButtons = form.querySelectorAll('button[type="submit"]');
            submitButtons.forEach(button => {
                button.disabled = true;
            });
        });
    });
}

