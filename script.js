
// ==========================================
// SYNORA TECHNOLOGIES - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle =
    document.getElementById("menuToggle") ||
    document.querySelector(".menu-toggle");

const navLinks =
    document.getElementById("navLinks") ||
    document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.classList.toggle("open", isOpen);

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// CONTACT FORM VALIDATION
// ==========================================

// ==========================================
// CONTACT FORM - OUTLOOK EMAIL
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const recipient = "synoratechnologies1@gmail.com";

        const emailSubject = "New Enquiry - " + subject;

        const emailBody =
            "New Enquiry - Synora Technologies\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Enquiry Type: " + subject + "\n\n" +
            "Message:\n" + message;

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + encodeURIComponent(emailSubject) +
            "&body=" + encodeURIComponent(emailBody);

        window.location.href = mailtoLink;

    });

}



// ==========================================
// END OF SYNORA TECHNOLOGIES JAVASCRIPT
// ==========================================
