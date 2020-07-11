$(document).ready(function () {
  /**
   * Rotating Text
   */
  $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: "|",
    // The delay between the changing of each phrase in milliseconds.
    speed: 7000,
    complete: function () {
      // Called after the entrance animation is executed.
    },
  });

  /**
   * Form Submition
   */

  var $form = $("form#contact-form"),
    $submitButton = $("#submit-form"),
    $feedBack = $("#form-text"),
    $nome = $("input#nome"),
    $empresa = $("input#empresa"),
    $email = $("input#email"),
    url =
      "https://script.google.com/macros/s/AKfycbzN9ZR0_msEXAnfOdO9nuTU3vYX7DjMlj-klQ-rnjdWNKH_YB3S/exec";

  $submitButton.on("click", function (e) {
    e.preventDefault();
    var formData = {
      nome: $nome.val(),
      empresa: $empresa.val(),
      email: $email.val().toLowerCase(),
    };

    console.log(formData);
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      data: formData,
      success: function () {
        $form.each(function () {
          this.reset();
        });
        $nome.prop("disabled", true);
        $empresa.prop("disabled", true);
        $email.prop("disabled", true);
        $submitButton.toggleClass("disabled");
        $submitButton.text("Enviado");
        $feedBack.text("Enviado com sucesso!");
      },
    });
  });
});
