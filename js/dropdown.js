const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    questions.forEach((item) => {
      item.nextElementSibling.classList.remove('show');
    });

    answer.classList.toggle('show');
  });
});