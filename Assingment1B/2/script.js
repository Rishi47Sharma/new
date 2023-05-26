document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registrationForm');
  
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      var userData = {
        name: name,
        email: email,
        password: password
      };

      // Send the data to the server using AJAX POST request
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
  
      xhr.onload = function() {
        if (xhr.status === 201) {
         
  
          var storedData = JSON.parse(localStorage.getItem('userData')) || [];
          storedData.push(userData);
          localStorage.setItem('userData', JSON.stringify(storedData));
             alert('Registration sucessfull.');
          // Redirect to a new page to display the data list
          window.location.href = 'data.html';
        } else {
          console.log(xhr.status);
          alert('Registration failed. Please try again.');
        }
      };
  
      xhr.onerror = function() {
        console.log(xhr.status);
        alert('Registration failed. Please try again.');
      };
  
      xhr.send(JSON.stringify(userData));
    console.log(userData);
    });
  });
  