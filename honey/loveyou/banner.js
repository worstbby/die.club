    let currentFormats = {};

    setInterval(function() {
      const banners = document.getElementsByClassName('discord-banner');
      for (const banner of banners) {
        const userId = banner.src.match(/banner\/(\d+)/)[1]; // Extrae el ID del usuario del src de la imagen
        fetch(`https://discord-user-lookup.vercel.app/api/user/${userId}`)
          .then(response => response.json())
          .then(data => {
            if (data.banner !== currentFormats[userId]) {
              currentFormats[userId] = data.banner;
              banner.src = `https://discord-user-lookup.vercel.app/api/banner/${userId}.${currentFormats[userId]}?size=1024`;
            }
          });
      }
    }, 5000);