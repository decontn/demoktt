document.addEventListener('DOMContentLoaded', function () {
    const phoneNumberSpan = document.getElementById('phoneNumber');
    const endCallButton = document.getElementById('endCallButton');
    const callDurationspan = document.getElementById('callDuration');
  
    // Retrieve call data from localStorage
    const phoneNumber = localStorage.getItem('phoneNumber');
    phoneNumberSpan.textContent = phoneNumber;
    const callDuration = localStorage.getItem('callDuration');
    callDurationspan.textContent = callDuration;
    // Button click event handler
    endCallButton.addEventListener('click', function () {
      // Perform call ending actions
      // For example, redirect back to the input page
      window.location.href = 'index.html';
    });
  });