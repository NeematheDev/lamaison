function validateBookingForm()
  {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const checkIn = document.getElementById("checkIn").value;
  const checkout = document.getElementById("checkout").value;
  const room = document.getElementById("room").value;
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children")  
  // Check if all fields are filled

  // Check if all fields are filled
  if (!firstName || !lastName || !email || !phone || !checkIn || !checkout || !room || !adults|| !children ) {
    alert("Please fill in all fields");
    return false;
  }
  
  // Check if email is valid
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  // check if number is 13 digits
  if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone)) {
    alert("Please enter a valid phone number");
    return false;
  }  // Check if check-out date is after check-in date
  if (new Date(checkOut) <= new Date(checkIn)) {
    alert("Check-out date should be after check-in date");
    return false;
  }
  
  // Send form data to email address
  window.location.href = "mailto:Info@Lamaison.co.ke?subject=Welcome to La Maison! Here are your booking details&body=" + 
  "First Name: " + firstName + "%0D%0A" + 
  "Last Name: " + lastName + "%0D%0A" + 
  "Email: " + email + "%0D%0A" + 
  "Phone: " + phone + "%0D%0A" + 
  "Check-in: " + checkIn + "%0D%0A" + 
  "Check-out: " + checkout +
  "room: " + room +
  "adult: " + adults +
  "children: " + children;

  return false;
}