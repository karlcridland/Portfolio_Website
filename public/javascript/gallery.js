const gallery = document.getElementById('gallery');
const filter = {};

ref.child('projects/title').once('value',snapshot=>{
    snapshot.forEach(function (project){
        projects.push(new Project(project.key,project.val()));
    })
})

// Displays all relevant projects to the gallery element after removing all current projects first.

function displayProjects(){

}

// Returns array of all projects that are relevant from the filter dict.

function relevantProjects(){

}