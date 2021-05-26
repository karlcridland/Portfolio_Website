class Project{

    constructor(id,title) {
        this.id = id;
        this.title = title;
        this.display = document.createElement('div');
        this.display.setAttribute('class','projectDisplay');
        this.createDisplay();
    }

    // Sets up all features that should be seen on the display for a user.

    createDisplay(){
        const project = this;
        project.display.innerHTML = '';
        this.getData(function (){
            const title = document.createElement('div');
            title.setAttribute('class','projectTitle');
            title.textContent = project.title;
            project.display.appendChild(title);
            const image = document.createElement('img');
            image.setAttribute('class','projectImage');
            image.getImage('projects/thumbnails/'+project.id);
            project.display.appendChild(image);
        })
    }

    // Downloads relevant data.

    getData(callback){
        ref.child('projects/type').once('value',snapshot=>{
            callback();
        })
    }

    // Returns in a callback whether the project is a featured project.

    isFeatured(callback){
        const project = this;
        if (project.featured !== undefined){
            callback(project.featured);
        }
        else{
            ref.child('projects/featured/'+project.id).once('value',snapshot=>{
                project.featured = snapshot.val();
                callback(project.featured);
            })
        }
    }

    // Saves any updates made by me for the project.

    save(){

    }

}

let projects = [];