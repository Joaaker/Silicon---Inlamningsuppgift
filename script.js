// javascript skriven av ChatGPT
const faqButtons = document.querySelectorAll('.dropdown-btn');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answerId = button.getAttribute('aria-controls');
        const answer = document.getElementById(answerId);
        const expanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle the 'aria-expanded' attribute
        button.setAttribute('aria-expanded', !expanded);
        answer.hidden = expanded;

        // Update the icon
        const icon = button.querySelector('i');
        if (expanded) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }

        // Toggle the 'expanded' class on the parent '.FAQ-item' element
        const faqItem = button.closest('.FAQ-item');
        faqItem.classList.toggle('expanded', !expanded);
    });
});