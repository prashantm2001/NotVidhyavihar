$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
      $(".form-group").removeClass("has-error");
      $(".help-block").remove();
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      superheroAlias: $("#superheroAlias").val(),
    };
console.log(formData);
    $.ajax({
      type: "post",
      url: "http://127.0.0.1:8000/",
      data: JSON.stringify(formData),
      contentType: "application/json; charset=utf-8",
      traditional: true,
    }).done(function (data) {
      console.log(data);

      if (!data.success) {
        if (data.errors.name) {
          $("#name-group").addClass("has-error");
          $("#name-group").append(
            '<div class="help-block">' + data.errors.name + "</div>"
          );
        }

        if (data.errors.email) {
          $("#email-group").addClass("has-error");
          $("#email-group").append(
            '<div class="help-block">' + data.errors.email + "</div>"
          );
        }

        if (data.errors.superheroAlias) {
          $("#superhero-group").addClass("has-error");
          $("#superhero-group").append(
            '<div class="help-block">' + data.errors.superheroAlias + "</div>"
          );
        }
      } else {
        console.log(data.message);
        $("form").html(
          '<div class="alert alert-success">' + data.message.name + " " +
          data.message.email + " "+ data.message.superheroAlias 
          + "</div>"
        );
      }

    })
    .fail(function (data) {
      console.log(data);
        $("form").html(
          '<div class="alert alert-danger">Could not reach server, please try again later.</div>'
        );
      });

    event.preventDefault();
  });
});
