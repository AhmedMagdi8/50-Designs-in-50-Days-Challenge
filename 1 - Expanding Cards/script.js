const panels = document.querySelectorAll('.panel');

panels.forEach(p => {
    p.addEventListener('click', () => {
        removeActiveClasses(panels);
        p.classList.add('active');

    })
});


function removeActiveClasses(panels) {
    panels.forEach(p => {
        p.classList.remove('active');
    })
}