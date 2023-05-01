const jokeBtn = document.querySelector('#joke-btn');
const jokeEl = document.querySelector('#joke');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something Went Wrong (No Funny)';
      }
    }
  };

  xhr.send();
}

jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);