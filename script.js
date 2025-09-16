// Wait for the DOM to be fully loaded before running script
document.addEventListener("DOMContentLoaded", function () {
  // Get all slides and calculate total
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Update total slides display
  document.getElementById("total-slides").textContent = totalSlides;
  updateSlideCounter();

  // Show the first slide by default
  slides[currentSlide].classList.add("active");

  // Event listener for next button to advance slides
  document.getElementById("next-btn").addEventListener("click", function () {
    if (currentSlide < totalSlides - 1) {
      slides[currentSlide].classList.remove("active");
      currentSlide++;
      slides[currentSlide].classList.add("active");
      updateSlideCounter();
    }
  });

  // Event listener for previous button to go back
  document.getElementById("prev-btn").addEventListener("click", function () {
    if (currentSlide > 0) {
      slides[currentSlide].classList.remove("active");
      currentSlide--;
      slides[currentSlide].classList.add("active");
      updateSlideCounter();
    }
  });

  // Keyboard navigation for accessibility
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      document.getElementById("next-btn").click();
    } else if (e.key === "ArrowLeft") {
      document.getElementById("prev-btn").click();
    }
  });

  // Function to update the slide counter display
  function updateSlideCounter() {
    document.getElementById("current-slide").textContent = currentSlide + 1;
  }
});
