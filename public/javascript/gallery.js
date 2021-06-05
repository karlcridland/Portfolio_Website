const gallery = document.getElementById('gallery');
const filter = {};

ref.child('projects/title').once('value',snapshot=>{
    snapshot.forEach(function (project){
        projects.push(new Project(project.key,project.val()));
    })
    displayProjects();
})

// Displays all relevant projects to the gallery element after removing all current projects first.

function displayProjects(){
    gallery.innerHTML = '';
    relevantProjects().forEach(function (project){

    })
}

// Returns array of all projects that are relevant from the filter dict.

function relevantProjects(){
    let filteredProjects = [];
    projects.forEach(function (project){
        let include = false;
        if (Object.keys(filter).length === 0){
            include = true;
        }
        else{
            Object.keys(filter).forEach(function (f){

            })
        }
        if (include){
            filteredProjects.push(project);
        }
    })
    return filteredProjects;
}