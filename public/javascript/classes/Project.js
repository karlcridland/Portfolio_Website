class Project{

    constructor(id,title) {
        this.id = id;
        this.title = title;
        this.order = projects.length;
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

            const seeMore = document.createElement('a');
            seeMore.setAttribute('class','projectSeeMore');
            seeMore.textContent = 'see more';
            seeMore.href = 'project.html?id='+project.id;
            project.display.appendChild(seeMore);

            const image = document.createElement('img');
            image.setAttribute('class','projectImage');
            image.getImage('projects/thumbnails/'+project.id);
            project.display.appendChild(image);

            const button = document.createElement('div');
            project.button = button;
            button.setAttribute('class','projectButton');
            project.display.appendChild(button);
            button.onclick = function (){
                project.buttonClicked();
            }

        })
    }

    buttonClicked(){
        const project = this;
        projects.forEach(function (p){
            p.reposition(project.order);
            p.display.appendChild(p.button);
        })
        project.display.removeChild(project.button);
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

    reposition(position){
        const project = this;
        project.display.style.transform = 'translateX(-50%) scale(0.8)';
        project.display.style.zIndex = '10';
        project.display.style.opacity = '1';
        if (project.order - position < -1){
            project.display.style.left = '-50%';
        }
        else{
            switch (position - project.order){
                case -1:
                    project.display.style.left = '0';
                    break;
                case 0:
                    project.display.style.left = '50%';
                    project.display.style.transform = 'translateX(-50%)';
                    project.display.style.zIndex = '20';
                    break;
                case 1:
                    project.display.style.left = '100%';
                    break;
                default:
                    project.display.style.left = '150%';
                    break;
            }
        }
    }

    // Saves any updates made by me for the project.

    save(){

    }

}

let projects = [];