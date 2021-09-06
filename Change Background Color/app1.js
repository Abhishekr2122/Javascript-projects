const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['green', 'blue', 'red', 'yellow', 'pink', 'brown', 'sky' ];

body.style.backgroundColor = "grey";
button.addEventListener('click',changeBackgroundcolor);

function changeBackgroundcolor(){
    const colorIndex = parseInt(Math.random()
    *colors.length);
    body.style.backgroundColor = colors[colorIndex];
}


