document.querySelectorAll('.faq h3').forEach(faq => {
    faq.addEventListener('click', () => {
        const answer = faq.nextElementSibling;
        const parentFaq = faq.parentElement;
        const arrow = faq.querySelector('span');

        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        parentFaq.classList.toggle('open');
        arrow.innerHTML = answer.style.display === 'block' ? '&#9650;' : '&#9660;';
    });
});

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.close-arrow').style.display = 'block'; 
  });
  
  document.querySelector('.close-arrow').addEventListener('click', function() {
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.close-arrow').style.display = 'none'; 
  });
  