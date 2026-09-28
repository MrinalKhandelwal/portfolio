/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("theme-toggle");


// Apply saved theme when the page loads
function loadTheme() {

    const savedTheme = localStorage.getItem("darkMode");

    if (savedTheme === "true") {
        document.body.classList.add("dark-mode");
        updateThemeButton(true);
    }
}


// Update button text
function updateThemeButton(isDark) {

    if (isDark) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
}


// Toggle dark mode
function toggleDarkMode() {

    const isDark =
        document.body.classList.toggle("dark-mode");

    localStorage.setItem("darkMode", isDark);

    updateThemeButton(isDark);
}


// Listen for button click
themeToggle.addEventListener(
    "click",
    toggleDarkMode
);


/* =========================================
   PROJECT SHOW / HIDE
========================================= */

const projectToggle =
    document.getElementById("project-toggle");

const projectDetails =
    document.getElementById("project-details");


function toggleProjectDetails() {

    projectDetails.classList.toggle("hidden");

    const isHidden =
        projectDetails.classList.contains("hidden");

    projectToggle.textContent =
        isHidden ? "Show More" : "Show Less";
}


projectToggle.addEventListener(
    "click",
    toggleProjectDetails
);


/* =========================================
   FORM VALIDATION
========================================= */

const contactForm =
    document.querySelector("#contact form");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const subjectInput =
    document.getElementById("subject");

const messageInput =
    document.getElementById("message");


/* Show error message */

function showError(input, message) {

    const errorElement =
        document.getElementById(
            `${input.id}-error`
        );

    errorElement.textContent = message;

    input.classList.add("input-error");
}


/* Clear error message */

function clearError(input) {

    const errorElement =
        document.getElementById(
            `${input.id}-error`
        );

    errorElement.textContent = "";

    input.classList.remove("input-error");
}


/* Validate name */

function validateName() {

    const name = nameInput.value.trim();

    if (name.length < 2) {

        showError(
            nameInput,
            "Name must contain at least 2 characters."
        );

        return false;
    }

    clearError(nameInput);

    return true;
}


/* Validate email */

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        showError(
            emailInput,
            "Please enter a valid email address."
        );

        return false;
    }

    clearError(emailInput);

    return true;
}


/* Validate subject */

function validateSubject() {

    const subject =
        subjectInput.value.trim();

    if (subject.length < 3) {

        showError(
            subjectInput,
            "Subject must contain at least 3 characters."
        );

        return false;
    }

    clearError(subjectInput);

    return true;
}


/* Validate message */

function validateMessage() {

    const message =
        messageInput.value.trim();

    if (message.length < 10) {

        showError(
            messageInput,
            "Message must contain at least 10 characters."
        );

        return false;
    }

    clearError(messageInput);

    return true;
}


/* Validate complete form */

function validateForm(event) {

    event.preventDefault();

    const nameValid =
        validateName();

    const emailValid =
        validateEmail();

    const subjectValid =
        validateSubject();

    const messageValid =
        validateMessage();

    const formSuccess =
        document.getElementById("form-success");


    if (
        nameValid &&
        emailValid &&
        subjectValid &&
        messageValid
    ) {

        formSuccess.textContent =
            "✓ Message validated successfully!";

        formSuccess.classList.add(
            "show-success"
        );

        contactForm.reset();

    } else {

        formSuccess.textContent = "";

        formSuccess.classList.remove(
            "show-success"
        );
    }
}


/* Submit event */

contactForm.addEventListener(
    "submit",
    validateForm
);


/* =========================================
   REAL-TIME VALIDATION
========================================= */

nameInput.addEventListener(
    "input",
    validateName
);

emailInput.addEventListener(
    "input",
    validateEmail
);

subjectInput.addEventListener(
    "input",
    validateSubject
);

messageInput.addEventListener(
    "input",
    validateMessage
);


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop =
    document.getElementById("back-to-top");


function handleScroll() {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");
    }
}


function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


window.addEventListener(
    "scroll",
    handleScroll
);

backToTop.addEventListener(
    "click",
    scrollToTop
);


/* =========================================
   DYNAMIC COPYRIGHT YEAR
========================================= */

function updateYear() {

    const yearElement =
        document.getElementById("current-year");

    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

loadTheme();

updateYear();