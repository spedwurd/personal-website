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
    cursorOutlineInfo.style.transform = `translate(${clientX}px, ${clientY}px)`;
}) 