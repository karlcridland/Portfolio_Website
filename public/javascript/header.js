const header = document.getElementById('header');

function appendButton(name,position,anchor,parent){
    const button = document.createElement('a');
    button.setAttribute('class','homeButton');
    button.textContent = name;
    button.style.float = position;
    parent.appendChild(button);

    if (anchor !== null){
        button.href = anchor;
    }

    return button;
}

const dropdown = document.createElement('div');
dropdown.setAttribute('class','dropdown');
document.getElementById('body').appendChild(dropdown);

const homeButton = appendButton('home','left','index.html',header);
const accountButton = appendButton('sign in','right',null,header);
const galleryButton = appendButton('gallery','right','gallery.html',header);
const iosButton = appendButton('iOS Apps','right','gallery.html?type=ios',dropdown);
const websiteButton = appendButton('Websites','right','gallery.html?type=websites',dropdown);

function locateDropdown(){
    dropdown.style.left = galleryButton.offsetLeft+'px';
    dropdown.style.width = galleryButton.offsetWidth+'px';
}
locateDropdown();
window.onresize = function (){
    locateDropdown();
}

document.getElementById('body').onmousemove = function (){
    dropdown.style.height = '0';
    dropdown.style.boxShadow = 'unset';
}

galleryButton.onmousemove = function (e){
    e.stopPropagation()
    dropdown.style.height = '148px';
    dropdown.style.boxShadow = '0 7px 5px 5px rgba(0,0,0,0.1)';
}

dropdown.onmousemove = function (e){
    e.stopPropagation()
}