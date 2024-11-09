const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
    counter.innerText = '0';

    // use recursion to update counter
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target) {
            counter.innerText =  `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);

        }
    }


    updateCounter();
})  