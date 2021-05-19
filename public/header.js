const header = document.getElementById('header');

const homeButton = document.createElement('a');
homeButton.setAttribute('class','homeButton');
homeButton.textContent = 'home';
homeButton.style.float = 'left';
header.appendChild(homeButton);

const accountButton = document.createElement('a');
accountButton.setAttribute('class','homeButton');
accountButton.textContent = 'account';
header.appendChild(accountButton);

const galleryButton = document.createElement('a');
galleryButton.setAttribute('class','homeButton');
galleryButton.textContent = 'gallery';
header.appendChild(galleryButton);

const dropdown = document.createElement('div');
dropdown.setAttribute('class','dropdown');
document.getElementById('body').appendChild(dropdown);

const paintingButton = document.createElement('a');
paintingButton.setAttribute('class','homeButton');
paintingButton.textContent = 'paintings';
dropdown.appendChild(paintingButton);
paintingButton.style.width = 'calc(100% - 40px)';

const sculptureButton = document.createElement('a');
sculptureButton.setAttribute('class','homeButton');
sculptureButton.textContent = 'sculptures';
dropdown.appendChild(sculptureButton);
sculptureButton.style.width = 'calc(100% - 40px)';

function locateDropdown(){
    dropdown.style.left = galleryButton.offsetLeft+'px';
    dropdown.style.width = galleryButton.offsetWidth+'px';
}
locateDropdown();
window.onresize = function (){
    locateDropdown();
}

document.getElementById('body').onmouseover = function (){
    dropdown.style.height = '0';
    dropdown.style.boxShadow = 'unset';
}

galleryButton.onmouseover = function (e){
    e.stopPropagation()
    dropdown.style.height = '148px';
    dropdown.style.boxShadow = '0 7px 5px 5px rgba(0,0,0,0.1)';
}

dropdown.onmouseover = function (e){
    e.stopPropagation()
}