document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faqs");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-q");
  
      question.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    });
  });
  