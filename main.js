const moodbox = document.querySelector("#moodbox");

const moods = [
    { name: 'Happy', color: 'yellow', textContent: 'Pharrell William - Happy' },
    { name: 'Sad', color: 'blue', textContent: 'Celine dion - All by myself'},
    { name: 'Angry', color: 'red', textContent: 'Rage against the machines - killing in the name'} 
];

  const moodSong = document.createElement('H2');
  moodSong.textContent = '';
  document.body.appendChild(moodSong);

 moods.forEach((mood) => {
    const btn = document.createElement('button');
    btn.textContent = mood.name; 


  btn.addEventListener('click', () => {
    document.body.style.backgroundColor = mood.color;
    moodSong.textContent = mood.textContent;
  });

    moodbox.appendChild(btn);
   
});