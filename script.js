document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hambuger-menu');
  const rightMenu = document.getElementById('rightMenu');

  hamburgerMenu.addEventListener('click', () => {
      // Toggle the 'active' class on the right menu
      rightMenu.classList.toggle('active');

      // Optionally toggle the 'active' class on the hamburger icon for visual feedback
      hamburgerMenu.classList.toggle('active');
  });
});


const cardsContainer = document.querySelector('.testimonial-cards');
const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const totalCards = cards.length;

function updateCards() {
  cardsContainer.style.transform = `translateX(-${currentIndex * 33.33}%)`;
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCards();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < totalCards - 3) {
    currentIndex++;
    updateCards();
  }
});

// Automatic scrolling
setInterval(() => {
  if (currentIndex < totalCards - 3) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCards();
}, 10000);

// form validation
document.getElementById('registration-form').addEventListener('submit', function(e) {
  const phone = document.getElementById('phone').value;
  const guardianPhone = document.getElementById('guardian-phone').value;

  // Basic phone number validation (10 digits)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone) || !phoneRegex.test(guardianPhone)) {
    alert('Please enter a valid 10-digit phone number.');
    e.preventDefault();
  }
});


document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Generate a unique registration number (e.g., timestamp)
  const registrationNumber = 'GS' + Date.now();

  // Create student object
  const studentData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    registrationNumber: registrationNumber
  };

  // Store the student data in localStorage
  localStorage.setItem(email, JSON.stringify(studentData));

  // Optionally, display the registration number to the user
  alert(`Registration successful! Your registration number is ${registrationNumber}`);
});

