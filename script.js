/* 
  JS for Kids' Magic Song Maker Presentation
  Written by Rania Nazzal
  Sources consulted:
  - MDN Web Docs: https://developer.mozilla.org/
  - W3Schools: https://www.w3schools.com/js/
*/

// Wait until the DOM is fully loaded before executing code
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", function () {
  // Select all slide elements with the class 'slide'
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  const slides = document.querySelectorAll(".slide");
  // Store the total number of slides
  const totalSlides = slides.length;
  // Initialize the current slide index to 0 (first slide)
  let currentSlide = 0;

  // Display the total number of slides in the slide counter
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/textContent
  document.getElementById("total-slides").textContent = totalSlides;
  // Update the slide counter display initially
  updateSlideCounter();

  // Ensure the first slide is visible by adding the 'active' class
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  slides[currentSlide].classList.add("active");

  // Add click event listener to the 'Next' button
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/addEventListener
  document.getElementById("next-btn").addEventListener("click", function () {
    // Check if there are more slides to show
    if (currentSlide < totalSlides - 1) {
      // Remove 'active' class from current slide
      slides[currentSlide].classList.remove("active");
      // Increment slide index
      currentSlide++;
      // Add 'active' class to the new current slide
      slides[currentSlide].classList.add("active");
      // Update the slide counter display
      updateSlideCounter();
    }
  });

  // Add click event listener to the 'Previous' button
  document.getElementById("prev-btn").addEventListener("click", function () {
    // Check if there are previous slides to show
    if (currentSlide > 0) {
      // Remove 'active' class from current slide
      slides[currentSlide].classList.remove("active");
      // Decrement slide index
      currentSlide--;
      // Add 'active' class to the new current slide
      slides[currentSlide].classList.add("active");
      // Update the slide counter display
      updateSlideCounter();
    }
  });

  // Add keyboard navigation for accessibility using arrow keys
  // Source: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
  document.addEventListener("keydown", function (e) {
    // Trigger 'Next' button click on right arrow key press
    // Source: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
    if (e.key === "ArrowRight") {
      document.getElementById("next-btn").click();
      // Trigger 'Previous' button click on left arrow key press
    } else if (e.key === "ArrowLeft") {
      document.getElementById("prev-btn").click();
    }
  });

  // Function to update the slide counter display
  function updateSlideCounter() {
    // Update the current slide number (adding 1 for user-friendly display)
    document.getElementById("current-slide").textContent = currentSlide + 1;
  }
});
