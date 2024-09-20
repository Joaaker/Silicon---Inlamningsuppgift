// javascript skriven av Joakim Lindh och ChatGPT
const darkmodeSwitch = document.getElementById('dark-mode');
const hasDarkmode = localStorage.getItem('darkmode');
const faqButtons = document.querySelectorAll('.dropdown-btn');


if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode()
} else if(hasDarkmode === 'off') {
  disableDarkMode()
}



darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.remove('light-mode');
  document.documentElement.classList.add('dark-mode');
}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('dark-mode');
  document.documentElement.classList.add('light-mode');
}


faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answerId = button.getAttribute('aria-controls');
        const expanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle the 'aria-expanded' attribute
        button.setAttribute('aria-expanded', !expanded);

        // Toggle the 'expanded' class on the parent '.FAQ-item' element
        const faqItem = button.closest('.FAQ-item');
        faqItem.classList.toggle('expanded', !expanded);
    });
});

// Function to update the FAQ based on screen size
function updateFAQ() {
  // Get all FAQ items
  const faqItems = document.querySelectorAll('.FAQ-item');

  // Close all FAQ items
  faqItems.forEach(item => {
      const button = item.querySelector('.dropdown-btn');
      button.setAttribute('aria-expanded', 'false');
      item.classList.remove('expanded');
  });

  // Determine which FAQ item to open
  if (window.innerWidth < 768) {
      // Mobile view: Open FAQ answer 1
      const answer1Item = document.querySelector('.dropdown-btn[aria-controls="answer1"]').closest('.FAQ-item');
      const button1 = answer1Item.querySelector('.dropdown-btn');
      button1.setAttribute('aria-expanded', 'true');
      answer1Item.classList.add('expanded');
  } else {
      // Tablet and desktop view: Open FAQ answer 3
      const answer3Item = document.querySelector('.dropdown-btn[aria-controls="answer3"]').closest('.FAQ-item');
      const button3 = answer3Item.querySelector('.dropdown-btn');
      button3.setAttribute('aria-expanded', 'true');
      answer3Item.classList.add('expanded');
  }
}

// Call the function on page load
updateFAQ();

// Listen for window resize events to update the FAQ items dynamically
window.addEventListener('resize', updateFAQ);




