const nav = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
    console.log(window.screenY, nav.offsetHeight);
    if(window.scrollY > nav.offsetHeight + 50) {
        nav.classList.add('active');
        console.log("Fffffffffffffffffff");
        
    } else {
        nav.classList.remove('active');
    }
    
}