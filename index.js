// EmailJS
(function () {
    emailjs.init("EMAILJS_PUBLIC_KEY");
  })();
  
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      var formData = new FormData(this);
      var username = formData.get("username");
      var email = formData.get("email");
      var title = formData.get("title");
      var description = formData.get("description");
      var captcha_response = grecaptcha.getResponse();
  
      var templateParams = {
        username: username,
        email: email,
        title: title,
        description: description,
        "g-recaptcha-response": captcha_response,
      };
  
      emailjs
        .send("EMAILJS_SERVICE_ID", "EMAILJS_TEMPLATE_ID", templateParams)
        .then(
          function () {
            console.log("Mail sent!");
          },
          function (error) {
            console.log("Mail not sent!", error);
          }
        );
    });