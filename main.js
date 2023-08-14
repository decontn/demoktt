document.addEventListener('DOMContentLoaded', function () {
    const callForm = document.getElementById('callForm');
  
    callForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const phoneNumber = document.getElementById('phoneNumber').value;
      const callDuration = document.getElementById('callDuration').value;
  
      // Save call data to localStorage or send to server
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('callDuration', callDuration);
  
      // Redirect to call screen
      window.location.href = 'call.html';
    });
  });
  