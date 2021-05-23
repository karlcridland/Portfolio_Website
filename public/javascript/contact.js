
const nav = document.getElementById('navigation');
const con = document.getElementById('contact');
const send = document.getElementById('send');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorBanner = document.getElementById('error banner');
const contactMessage = new ContactMessage(name,email,message);

document.getElementById('body').onclick = function (){
    if (contactMessage.isEmpty()){
        nav.style.width = 'calc(70% - 2px)';
        con.style.width = 'calc(30% - 2px)';
        send.style.right = '-100px';
    }
};

errorBanner.messageCount = 0;
function displayMessage(message,error){
    const count = errorBanner.messageCount+1;
    errorBanner.messageCount = count;
    errorBanner.style.transform = 'translateY(230px)';
    window.setTimeout(function (){
        if (errorBanner.messageCount === count){
            errorBanner.style.transform = 'unset';
        }
    },3000);
    const textArea = document.getElementById('error message');
    if (error){
        textArea.innerHTML = '<span style="color: indianred; font-weight: 700">Error: </span>'+message;
    }
    else{
        textArea.innerHTML = '<span style="color: limegreen; font-weight: 700">Sent: </span>'+message;
    }
}

errorBanner.onclick = function (e){
    e.stopPropagation();
}

send.onclick = function (e){
    e.stopPropagation();
    if (contactMessage.isReady()){
        contactMessage.saveToDatabase();
        contactMessage.clear();
        displayMessage('Your message has been sent and will be answered shortly.',false);
        document.getElementById('body').click();
    }
    else{
        displayMessage(contactMessage.error,true);
    }
}