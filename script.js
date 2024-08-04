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
    if (window.location.pathname == "/projects.html") {
    const projectsSearch = document.getElementById('projects-search');
    const allProjects = Array.from(document.getElementsByClassName('project'));
    let removedNodes = [];
    projectsSearch.addEventListener('input', (event) => {
        const projectSearchValue = event.target.value;
        for (project of allProjects) {
            project_name = project.innerText;
            if (project_name.includes(projectSearchValue)) {
                for (p of removedNodes) {
                    if (p == project_name) {
                        topList = document.getElementById("projects-list");
                        topList.appendChild(project);
                    }
            }
            } else {
                removedNodes.push(project_name);
                project.remove();

            }
        }
    })
} else if (window.location.pathname == '/blog.html') {
    const blogSearch = document.getElementById('blog-search');
    const allBlogs = Array.from(document.getElementsByClassName('blog'));
    const defaultBlogs = Array.from(document.getElementById('post-box').children);
    console.log(defaultBlogs)
    let removedBlogs = [];
    inDefault = true;
    blogSearch.addEventListener('input', (event) => {
        const blogSearchValue = event.target.value;
        if (blogSearchValue == '') {
            for (b of defaultBlogs) {
                topList = document.getElementById('post-box');
                topList.appendChild(b);
                inDefault = true;
            }
        } else {
            if (inDefault == true) {
                document.querySelectorAll('.post-date').forEach(e => e.remove());
                document.getElementById('first-post-date').remove();
            }
            inDefault = false;
            for (blog of allBlogs) {
                blog_name = blog.innerText;
                if (blog_name.includes(blogSearchValue)) {
                    for (p of removedBlogs) {
                        if (p == blog_name) {
                            topList = document.getElementById("post-box");
                            topList.appendChild(blog);
                        }
                }
                } else {
                    removedBlogs.push(blog_name);
                    console.log(blog);
                    blog.remove();
    
                }
            }
        }
    })
}
})