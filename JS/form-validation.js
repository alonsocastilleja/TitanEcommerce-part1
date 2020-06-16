function formValidation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("emailAdd").value;
    var comments = document.getElementById("comments").value;
    var error = document.getElementById("errorMessage");
    var text = 'Please enter a valid name!';
    var email_text = 'Please enter a valid email!';
    var comm_text= 'Please provide us with any questions!';

  
    if(fname.length < 3 || lname.length < 3) {
        errorMessage.innerHTML = text;
        return false;
    }
    if(email.indexOf('@') == -1) {
        errorMessage.innerHTML = email_text;
        return false;
    }
    if(comments.length < 5){
        errorMessage.innerHTML = comm_text;
        return false;
    }
  

    alert('Your form has been submitted successfully. We will contact you shortly! ');
    return true;

}