console.log('hi')

addEventListener('mousemove', (event) => {
    let x = event.pageX;
    let y = event.pageY;
  
    const cursorInfo = document.getElementById('cursor');
    cursorInfo.style.top = y-6 + 'px';
    cursorInfo.style.left = x-4 + 'px';
  
    const cursorOutlineInfo = document.getElementById('cursor-outline');
    cursorOutlineInfo.style.top = y-15 + 'px';
    cursorOutlineInfo.style.left = x-11.5 + 'px'
}) 

addEventListener('click', async (event) => {
    let cursor = document.getElementById('cursor');
    cursor.classList.add('cursor-animation');
    await new Promise(r => setTimeout(r, 250));
    cursor.classList.remove('cursor-animation');
})

addEventListener('DOMContentLoaded', (event) => {
    const projectsSearch = document.getElementById('projects-search');

    projectsSearch.addEventListener('input', (event) => {
        const projectSearchValue = event.target.value;
        const projects = document.getElementsByClassName('project');
        for (project of projects) {
            project_name = project.innerHTML;
            console.log(project_name)
            console.log(project)
            if (project_name.includes(projectSearchValue)) {
                project.style.visibility = 'visible';
            } else {
                project.style.visibility = 'hidden';
            }
            console.log(project_name.includes(projectSearchValue));
        }
        console.log(projects);
        console.log(projectSearchValue);
})
})