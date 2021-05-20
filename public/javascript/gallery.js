const gallery = document.getElementById('gallery');

function appendGallery(key, sold){

    const background = document.createElement('div');
    background.setAttribute('class','artwork');
    gallery.appendChild(background);



}

ref.child('artwork/sold').once('value',snapshot=>{
    snapshot.forEach(function (piece){
        appendGallery(piece.key,piece.val());
    })
})


