const buttons = document.querySelectorAll('.faqs-btn');
const faqsBtn = document.querySelectorAll('.faqs-btn-2');

dropDown(buttons);
dropDown(faqsBtn);

function dropDown(buttons) {
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.parentElement.nextElementSibling;
    const openFaq = answer.classList.contains('show');

    buttons.forEach((item) => {
      const otherAnswer = item.parentElement.nextElementSibling;
      otherAnswer.classList.remove('show');
    });
    
    if (!openFaq) {
      answer.classList.add('show');
    }
  });
});
}