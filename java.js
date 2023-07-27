// JavaScript code to handle form submission
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const age = formData.get("age");
    const gender = formData.get("gender");
    const country = formData.get("country");
    const email = formData.get("email");
    const password = formData.get("password");
    const message = formData.get("message");
    alert('Thank you for you submission');
    // Reset the form after submission (optional)
    event.target.reset();
  });
  const link= document.querySelectorAll('.navbar a');
     link.forEach(link => {
      // Check if the link's href matches the current page's URL
      if (link.href === window.location.href) {
        link.style.color = '#FC6C85'; // Set the link color to pink if it's the current page
      }
        // Remove the 'active' class from all links
        link.forEach(link => link.style.color = 'black');

        // Set the clicked link's color to pink
        this.style.color = '#FC6C85';
      });
    







