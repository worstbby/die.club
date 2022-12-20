function typewriter(element) {

  const text = document.getElementById(element);

  
  const characters = text.innerHTML.split('');

  
  text.innerHTML = '';

  characters.forEach((character, i) => {
    setTimeout(() => {
      text.innerHTML += character;
    }, i * 100); 
  });
}

window.onload = function() {
  
  typewriter('typewriter');
}
