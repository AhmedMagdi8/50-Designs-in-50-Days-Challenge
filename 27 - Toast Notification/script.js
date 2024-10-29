const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');


const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four"
];

const types = ['info', 'success', 'error']
button.addEventListener('click', () => createNotification('This is invalid data', ''));

function createNotification(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type? type : getRandomType() )
    notif.innerText = message ?? getRandomMessage();
    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000)
}



function getRandomMessage() {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
    
    return message
}


function getRandomType() {
    const type = types[Math.floor(Math.random() * types.length)];
    console.log(type);
    
    return type
}