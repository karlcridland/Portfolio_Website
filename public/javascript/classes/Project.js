class Project{

    constructor(id,title) {
        this.id = id;
        this.title = title;
        this.order = projects.length;
        this.thumbnail = document.createElement('div');
        this.display = document.createElement('div');
        this.display.setAttribute('class','projectDisplay');
        this.createDisplay();
    }

    // Sets up the thumbnail used in the gallery display.

    createThumbnail(){
        const project = this;
    }

    // Sets up all features that should be seen on the display for a user.

    createDisplay(){
        const project = this;
        project.display.innerHTML = '';
        this.getData(function (){

            const title = document.createElement('div');
            title.setAttribute('class','projectTitle');
            title.innerHTML = project.title+'<br>';
            project.display.appendChild(title);

            const seeMore = document.createElement('a');
            seeMore.setAttribute('class','projectSeeMore');
            seeMore.textContent = 'see more';
            seeMore.href = 'project.html?id='+project.id;
            project.display.appendChild(seeMore);

            const tags = document.createElement('div');
            tags.setAttribute('class','projectTags');
            project.display.appendChild(tags);

            let tagArray = [];
            const tagColors = {
                'iOS':'rgb(8, 74, 191)',
                'watchOS':'rgb(204, 0, 0)',
                'website':'rgb(43,140,3)',
                'java':'rgb(165,92,0)'
            };
            project.type.toString().split(' ').forEach(function (tag){
                tagArray.push('<a class="projectTags" href="gallery.html?type='+tag+'" style="background-color: '+tagColors[tag]+'">'+tag+'</a>');
            })
            tags.innerHTML = tagArray.join(' ');

            const description = document.createElement('div');
            description.setAttribute('class','projectDescription');
            description.textContent = project.description;
            project.display.appendChild(description);

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
            };

            ['left','right'].forEach(function (direction){
                const arrow = document.createElement('img');
                arrow.src = 'media/arrow_'+direction+'.png';
                arrow.setAttribute('class','arrow');
                button.appendChild(arrow);
            })

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
        const project = this;
        ref.child('projects/type/'+project.id).once('value',snapshot=>{
            project.type = snapshot.val();
        }).then(
            ref.child('projects/description/'+project.id).once('value',snapshot=>{
                project.description = snapshot.val();
            }).then(callback)
        )
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
        project.display.style.zIndex = '10';
        project.display.style.opacity = '1';
        project.display.style.transform = 'translateX(-50%) scale(0.8)';
        project.display.style.top = '0';

        switch (project.order - position){
            case 0:
                project.display.style.left = '50%';
                project.display.style.transform = 'translateX(-50%)';
                project.display.style.zIndex = '20';
                break;
            case -1:
                project.display.style.left = '0';
                break;
            case 1:
                project.display.style.left = '100%';
                break;
            default:
                if (project.order - position < -1){
                    project.display.style.left = '-50%';
                }
                else{
                    project.display.style.left = '150%';
                }
                break;
        }
    }

    // Saves any updates made by me for the project.

    save(){

    }

}

let projects = [];

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

String.prototype.getDate = function (){
    const split = this.split(':')
    const year = split[0];
    const month = months[parseInt(split[1])];
    const day = parseInt(split[2]);
    return [day.ordinate(),month,year].join(' ');
}

Number.prototype.ordinate = function (){
    if (this >= 11 && this <= 13){
        return this+"th";
    }
    else{
        switch (this){
            case 1:
                return this+'st';
            case 2:
                return this+'nd';
            case 3:
                return this+'rd';
            default:
                return this+'th';
        }
    }
}