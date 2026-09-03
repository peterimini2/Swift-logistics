const buttons = document.querySelectorAll('.faqs-btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.parentElement.nextElementSibling;
    const isOpen = answer.classList.contains('show');

    buttons.forEach((item) => {
      const otherAnswer = item.parentElement.nextElementSibling;
      otherAnswer.classList.remove('show');
    });
    
    if (!isOpen) {
      answer.classList.add('show');
    }
  });
});