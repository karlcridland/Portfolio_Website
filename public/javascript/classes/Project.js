class Project{
    constructor(id,title) {
        this.id = id;
        this.title = title;
        this.display = document.createElement('div');
        this.createDisplay();
    }

    // Sets up all features that should be seen on the display for a user.

    createDisplay(){
        this.getData(function (){

        })
    }

    // Downloads relevant data.

    getData(callback){
        ref.child('projects/type').once('value',snapshot=>{
            callback();
        })
    }

    // Saves any updates made by me for the project.

    save(){

    }

}