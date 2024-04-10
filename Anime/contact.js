


// ?????????????????????????????????????????????????????Navbar
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbarCenter = document.querySelector(".navbar-center");

    hamburgerMenu.addEventListener("click", function() {
        navbarCenter.classList.toggle("active");
    });
});



// ?????????????????????????????????????????????????????Section-2
document.addEventListener("DOMContentLoaded", function() {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const option1Input = document.getElementById("option1");
    const messageInput = document.getElementById("message");
    const submitButton = document.getElementById("submitButton");
  
    function updateFullName() {
      const fullNameInput = document.createElement('input');
      fullNameInput.type = 'hidden';
      fullNameInput.name = 'name';
      fullNameInput.value = firstNameInput.value + ' ' + lastNameInput.value;
      document.getElementById('contactForm').appendChild(fullNameInput);
    }
  
    firstNameInput.addEventListener('input', updateFullName);
    lastNameInput.addEventListener('input', updateFullName);
  
    function updateSubject() {
      document.getElementById('_subject').value = option1Input.value;
    }
  
    option1Input.addEventListener('change', updateSubject);
  
    function validateForm() {
      const inputs = [firstNameInput, lastNameInput, option1Input, messageInput];
      let isValid = true;
  
      inputs.forEach(input => {
        if (!input.value) {
          isValid = false;
          input.classList.add('invalid');
        } else {
          input.classList.remove('invalid');
        }
      });
  
      if (isValid) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }
  
    firstNameInput.addEventListener('input', validateForm);
    lastNameInput.addEventListener('input', validateForm);
    option1Input.addEventListener('change', validateForm);
    messageInput.addEventListener('input', validateForm);
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const option1Input = document.getElementById("option1");
    const subjectInput = document.getElementsByName("_subject")[0];
  
    function updateSubject() {
      subjectInput.value = option1Input.value;
    }
  
    option1Input.addEventListener('change', updateSubject);
  });




//   Url update
document.getElementById('option1').addEventListener('change', function() {
    var selectedOption = this.value;
    var url = new URL(window.location.href);
    url.searchParams.set('selectedOption', selectedOption);
    window.history.replaceState({}, '', url);
  });



 // Function to get URL parameter value by name
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the selectedOption parameter from the URL
    var selectedOption = getParameterByName('selectedOption');

    // If the selectedOption parameter is found, set the corresponding option in the select element
    if (selectedOption) {
      var selectElement = document.getElementById('option1');
      var options = selectElement.options;
      for (var i = 0; i < options.length; i++) {
        if (options[i].textContent === selectedOption) {
          options[i].selected = true;
          break;
        }
      }
    }
