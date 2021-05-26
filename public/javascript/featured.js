
// Downloads all projects from the database and appends them to the projects array in javascript/classes/Projects.js,
// saves a projects ID code and title, the constructor will get all other relevant information.

function downloadProjects(callback){
    ref.child('projects/title').once('value',snapshot=>{
        snapshot.forEach(function (titleSnap){
            projects.push(new Project(titleSnap.key,titleSnap.val()));
        })

        projects = projects.sort(function (a,b){
            if (a.id < b.id){
                return 1;
            }
            else if (a.id > b.id){
                return -1;
            }
            else{
                return 0;
            }
        })

        callback();
    })
}

// Displays the projects to the slideshow on the index.html page and creates a carousel effect.

function displayToSlideshow(){
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = '';
    projects.forEach(function (project){
        project.isFeatured(function (feature){
            if (feature){
                slideshow.appendChild(project.display);
            }
        })
    })
    projects[1].buttonClicked();
}