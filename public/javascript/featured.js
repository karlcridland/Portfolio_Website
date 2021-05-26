
// Downloads all projects from the database and appends them to the projects array in javascript/classes/Projects.js,
// saves a projects ID code and title, the constructor will get all other relevant information.

function downloadProjects(callback){
    ref.child('projects/title').once('value',snapshot=>{
        snapshot.forEach(function (titleSnap){
            projects.push(new Project(titleSnap.key,titleSnap.val()));
        })
        callback();
    })
}

// Displays the projects to the slideshow on the index.html page and creates a carousel effect.

function displayToSlideshow(){
    const slideshow = document.getElementById('slideshow');
    slideshow.innerHTML = '';
    projects.forEach(function (project){
        if (project.featured){

        }
    })
}