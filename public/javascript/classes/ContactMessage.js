class ContactMessage{

    constructor(name,email,message) {
        this.name = name;
        this.email = email;
        this.message = message;

        [name,email,message].forEach(function (input){
            input.onfocus = function (){
                con.style.width = 'calc(60% - 2px)';
                nav.style.width = 'calc(40% - 2px)';
                send.style.right = '0';
            }
            input.onkeypress = function (){
                if (input.value.length > 0){
                    input.focus();
                }
            }
            input.onclick = function (e){
                e.stopPropagation();
            }
        })
    }

    // Returns whether the message a user has left has any fields with values which are of length zero.

    isEmpty(){
        const message = this;
        let ready = true;
        [message.name,message.email,message.message].forEach(function (input){
            if (input.value.length > 0){
                ready = false;
            }
        });
        return ready;
    }

    // Checks whether all fields have been filled, and whether the email address left by a customer is valid, then
    // returns true if all conditions have been satisfied, and false if not.

    isReady(){
        const message = this;
        let ready = true;
        [message.name,message.email,message.message].forEach(function (input){
            if (input.value.length === 0){
                message.error = 'All fields must be filled.';
                ready = false;
            }
        });
        if (ready === true && !message.emailValid()){
            message.error = 'A valid email address is required.';
            ready = false;
        }
        return ready;
    }

    // Clears the input fields.

    clear(){
        const message = this;
        [message.name,message.email,message.message].forEach(function (input){
            input.value = '';
        });
    }

    emailValid(){
        const email = this.email.value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    saveToDatabase(){

    }

}