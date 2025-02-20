document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating button');
  
    // Add click event listeners to rating buttons
    ratingButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
  
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
      });
    });
  
    // Add click event listener to submit button
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', () => {
      // Check if a rating is selected
      const selectedButton = document.querySelector('.rating button.selected');
      if (!selectedButton) {
        alert('Please select a rating before submitting!');
        return;
      }
  
      // Get the selected rating value
      const ratingValue = selectedButton.value;
  
      // Update the rating message
      document.getElementById('ratingSelect').innerHTML = `You selected ${ratingValue} out of 5`;
  
      // Show the thank you form and hide the rating form
      document.getElementById('thanksForm').classList.remove('d-none');
      document.getElementById('form').classList.add('d-none');
    });
  });