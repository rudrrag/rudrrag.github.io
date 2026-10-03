const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navigation-bar');

menuIcon.onclick = () => {
    navBar.classList.toggle('active');
}

// JavaScript for Form

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { Accept:'application/json'}
        });

        if (response.ok) {
            formStatus.textContent = "Thanks, I'll get you back to you soon.";
            contactForm.reset();
        }
        else {
            formStatus.textContent = "Something went Wrong. Please try again.";
        }
    }
    catch (error) {
        formStatus.textContent = "Network error. Please check your connection.";
    }
});