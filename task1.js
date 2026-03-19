// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const usersList = document.querySelector(".usersList");
const url = "https://jsonplaceholder.typicode.com/users";

// ----------Method 1-------------
// async function getUsers () {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         data.map((user) => {
//             usersList.innerHTML += `<li>${user.name}</li>`
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }
// getUsers()


// ----------Method 2-------------

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.map((user) => {
      usersList.innerHTML += `<li>${user.name}</li>`;
    });
  });
