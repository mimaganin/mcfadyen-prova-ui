 function showAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then((data) => {
       let albumBox = document.getElementById('albums');
       data.map((item) => {
        const { id, title } = item;
        return (albumBox.innerHTML += `<div class="album"> <p onclick="showPhotos(${id})">${title}</p> </div>`);
      })
    })
    .catch((err) => {
      console.error("Ocorreu um erro", err);
    });  
}

  
function showPhotos(albumId){
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,)
    .then(response => response.json())
    .then((data) => {
      let mainDiv = document.querySelector('main');
      mainDiv.innerHTML = `
      <h1>Photos</h1>
      <div id="photos"></div>
      `;
      
      let photosGrid = document.getElementById('photos');
  
      data.map((item) => {
        const { thumbnailUrl, title } = item;
        return (photosGrid.innerHTML += `
          <div class="photo"> <img src="${thumbnailUrl}" alt="${title}'s thumbnail" /> <p>${title}</p> </div>
          `);
      })
    })

      .catch((err) => {
        console.error("Ocorreu um erro", err);
      });  
  };

  showAlbum();