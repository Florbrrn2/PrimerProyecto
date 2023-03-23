

let infocult_btn = document.getElementById('infocult_btn');
let infocult = document.getElementById('infocult');

infocult_btn.addEventListener('click', toggleText);
function toggleText(){
    infocult.classList.toggle('show');
}

new kursor ({
    type:4,
    removeDefaultCursor:true,
    color: "#ed7839"
});










