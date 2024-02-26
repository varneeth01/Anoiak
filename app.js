function emailSend(){

  var userName = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  var messageBody = "Name " + name +
  "<br/> Phone " + phone +
  "<br/> Email " + email;
  Email.send({
      SecureToken : " 6313c117-e70a-414c-8387-3c75bedc2358 ",
      To : 'them@website.com',
      From : "varneethvarma.n@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
}).then(
  message => {
    if(message=='OK'){
      swal("Secussful", "You clicked the button!", "success");
    }
    else{
      swal("Error", "You clicked the button!", "error");
    }
  }
);
}



