// Add game from input to ordered list
const addBtn = document.getElementById('addBtn');
const newGame = document.getElementById('newGame');
const gamesList = document.getElementById('games-list');

addBtn.addEventListener('click', () => {
  const name = newGame.value.trim();
  if (!name) return;
  const li = document.createElement('li');
  li.textContent = name;
  gamesList.appendChild(li);
  newGame.value = '';
});
