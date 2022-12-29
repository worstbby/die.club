fetch(`https://discord-user-lookup.vercel.app/api/user/946943764864307210`)
  .then(response => response.json())
  .then(user => {
    
    const username = user.username;
    const tag = user.discriminator;
    
    
    const div = document.querySelector('.discord-username');
    div.innerHTML = `<span style="font-weight: 700; font-size:14px; color:#fff">${username}</span><span style="font-weight: 700; font-size:15px; color: #b8babd">#${tag}</span>`;
  });