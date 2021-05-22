
const nav = document.getElementById('navigation');
const con = document.getElementById('contact');
const send = document.getElementById('send');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorBanner = document.getElementById('error banner');

document.getElementById('body').onclick = function (){
    nav.style.width = 'calc(70% - 2px)';
    con.style.width = 'calc(30% - 2px)';
    send.style.right = '-100px';
};
[name,email,message].forEach(function (input){
    input.onfocus = function (){
        con.style.width = 'calc(60% - 2px)';
        nav.style.width = 'calc(40% - 2px)';
        send.style.right = '0';
    }
    input.onclick = function (e){
        e.stopPropagation();
    }
})

errorBanner.messageCount = 0;
function displayError(message){
    const count = errorBanner.messageCount+1;
    errorBanner.messageCount = count;
    errorBanner.style.transform = 'translateY(230px)';
    window.setTimeout(function (){
        if (errorBanner.messageCount === count){
            errorBanner.style.transform = 'unset';
        }
    },3000);

    document.getElementById('error message').innerHTML = '<span style="color: indianred; font-weight: 700">Error: </span>'+message;
}

errorBanner.onclick = function (e){
    e.stopPropagation();
}

send.onclick = function (e){
    e.stopPropagation();
    [name,email,message].forEach(function (input){
        if (input.value.length === 0){
            displayError('All fields must be filled.');
        }
    });
}
