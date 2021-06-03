const gallery = document.getElementById('gallery');

ref.child('projects/title').once('value',snapshot=>{
    snapshot.forEach(function (project){
        projects.push(new Project(project.key,project.val()));
    })
})