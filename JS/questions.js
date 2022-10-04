(function () {
  const titleQuestions = [...document.querySelectorAll('.questions__title')];
  titleQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      let height = 0;
      let opacity = 0;
      let answer = question.nextElementSibling;

      question.children[0].classList.toggle('questions__arrow--rotate');

      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
        opacity = 1;
      }

      answer.style.height = `${height}px`;
      answer.style.opacity = `${opacity}`;
    });
  });
})();
