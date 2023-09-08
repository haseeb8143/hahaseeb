

    // Prevent the default form submission behavior
    function Validate(e) {

        e.preventDefault();
    
        console.log('running')
        // Perform your form validation here
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");
    
        // Example validation: Check if the name, email, and message are not empty
        if (name.value.trim() === "") {
          name.classList.add("error")
        }
        else {
          name.classList.remove("error")
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "" || !emailPattern.test(email.value.trim())) {
            email.classList.add("error");
        } else {
            email.classList.remove("error");
        }


        if ( message.value.trim() === "") {
            message.classList.add("error")
        }
        else {
          message.classList.remove("error")
        }
        if (name.value.trim() !== "" & email.value.trim() !== "" & email.value.trim() !== "") {
          // If validation passes, you can submit the form
          // If validation passes, make an AJAX request
          console.log("step 1")
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://script.google.com/macros/s/AKfycbyx_plob_DMcwAR9uAePIwgL-KgDpYfSE69mb-BwMTiMO2BKtsHt3SdtNPM_mIcZ5AFFA/exec", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
      // Define a callback function to handle the response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Handle the response here
          var response = JSON.parse(xhr.responseText);
          if (response.result === "success") {
            // The form was successfully submitted
            
            document.getElementById("alert").textContent = "Submitted Succesfully!"
          } else {
            // Handle any other response as needed
            document.getElementById("alert").textContent = "Something went wrong!"
          }
        }
      };
      
      // Send the form data
      console.log("wrking ig??")
      xhr.send("Name=" + encodeURIComponent(name.value) + "&Email=" + encodeURIComponent(email.value) + "&Message=" + encodeURIComponent(message.value));
      name.value = ""
      email.value = ""
      message.value = ""
    }
  }

document.getElementById("subbtn").addEventListener('click', Validate);

