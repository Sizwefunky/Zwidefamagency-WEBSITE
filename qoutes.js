// Quotes for each service
const nannyQuotes = [
  "A child’s laughter is the heart of a home.",
  "Care is the seed of confidence.",
  "Love and patience build strong foundations."
];
const tutorQuotes = [
  "Education is the most powerful weapon to change the world. – Nelson Mandela",
  "Learning today, leading tomorrow.",
  "Knowledge is the key to freedom."
];
const coachQuotes = [
  "The youth of today are the leaders of tomorrow. – Nelson Mandela",
  "Growth begins with guidance.",
  "Dream big, start small, act now."
];

// Rotate quotes with fade effect
function rotateQuotes(quotes, elementId, interval) {
  let index = 0;
  const element = document.getElementById(elementId);
  element.innerText = quotes[index];
  setInterval(() => {
    element.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % quotes.length;
      element.innerText = quotes[index];
      element.style.opacity = 1;
    }, 1000);
  }, interval);
}

rotateQuotes(nannyQuotes, "nanny-quote", 5000);
rotateQuotes(tutorQuotes, "tutor-quote", 5000);
rotateQuotes(coachQuotes, "coach-quote", 5000);

// Smooth scroll animation for cards
const cards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

  // Toggle clicked card
  card.classList.toggle('active');

// Toggle service info on click
function toggleInfo(id) {
  const info = document.getElementById(id);
  const card = info.parentElement;

  // Collapse other cards
  document.querySelectorAll('.service-card').forEach(c => {
    if (c !== card) c.classList.remove('active');
  });

  // Toggle clicked card
  card.classList.toggle('active');
}

