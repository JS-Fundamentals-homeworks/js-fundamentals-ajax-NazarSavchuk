// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.getElementById("userNameInput");
const getUserButton = document.getElementById("getUserButton");
const userCitySpan = document.getElementById("userCity");

userNameInput.addEventListener("input", () => {
  getUserButton.disabled = !userNameInput.value.length;
});

getUserButton.addEventListener("click", () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const foundUser = data.find((user) =>
        user.name.toLowerCase().includes(userNameInput.value.toLowerCase()),
      );
      userCity.innerText = foundUser.address.city;
    })
    .catch((error) => {
      userCitySpan.innerText =
        "Something gone wrong :( But probably you entered wrong name, you need to try enter full name XD";
      console.error(error);
    });
});
