function validate(e) {
    e.preventDefault(); // Pre form submission for validation

    // Capture the current values of the form fields
    const Name = document.getElementById("name").value;
    const Phone = document.getElementById("phone").value;
    const Email = document.getElementById("email").value;
    const Address = document.getElementById("address").value;
    const Gender = document.querySelector('input[name="Gender"]:checked');
    const Hobbies = document.querySelectorAll('input[name="hobs[]"]:checked');
    const Skills = document.querySelectorAll('input[name="skll[]"]:checked');
    const Country = document.getElementById("countri").value;

    let valid = true;

    // Clear previous error messages
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
    document.getElementById("error5").innerHTML = "";
    document.getElementById("error6").innerHTML = "";
    document.getElementById("error7").innerHTML = "";
    document.getElementById("error8").innerHTML = "";

    // Validate each field
    if (Name === "") {
        document.getElementById("error1").innerHTML = "*Please enter your name";
        valid = false;
    }

    if (Phone === "") {
        document.getElementById("error2").innerHTML = "*Please enter your phone number";
        valid = false;
    } else if (isNaN(Phone) || Phone.length !== 10) {
        document.getElementById("error2").innerHTML = "*Please enter a valid 10-digit phone number";
        valid = false;
    }

    if (Email === "") {
        document.getElementById("error3").innerHTML = "*Please enter your email address";
        valid = false;
    } else if (!Email.match(/^[A-Za-z\._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        document.getElementById("error3").innerHTML = "*Please enter a valid email address";
        valid = false;
    }

    if (Gender === null) {
        document.getElementById("error4").innerHTML = "*Please select your gender";
        valid = false;
    }

    if (Address === "") {
        document.getElementById("error5").innerHTML = "*Please enter your address";
        valid = false;
    }

    if (Hobbies.length === 0) {
        document.getElementById("error6").innerHTML = "*Please select at least one hobby";
        valid = false;
    }

    if (Skills.length === 0) {
        document.getElementById("error7").innerHTML = "*Please select at least one skill";
        valid = false;
    }

    if (Country === ""){
        document.getElementById("error8").innerHTML = "*Please select your Country";
        valid = false;
    }

    if (valid) {
        alert("Your form has been submitted !!");
        document.querySelector('form').submit(); // Submit the form if valid
    } else {
        alert("Please fill in all required fields.");
    }
}

// Attach the validate function to the form's submit e
document.querySelector('form').addEventListener('submit', validate);
