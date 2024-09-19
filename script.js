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





