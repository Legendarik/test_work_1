let NotEnter = document.getElementById("FormNotEnter");
NotEnter.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});

function validate_form() {
  valid = true;

  if (document.user_form.user_name.value == "") {
    alert("Заполните поле 'Ваше имя'.");
    valid = false;
  } else if (document.user_form.user_phone.value == "") {
    alert("Заполните поле 'Телефон'.");
    valid = false;
  } else if (document.user_form.user_password.value == "") {
    alert("Заполните поле 'Пароль'.");
    valid = false;
  } else if (
    document.querySelector('[value="love"]').checked !== true &&
    document.querySelector('[value="verylove"]').checked !== true
  ) {
    alert("Выберите насколько сильно вы любите свою работу.");
    valid = false;
  }
  return valid;
}
