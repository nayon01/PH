//Option 1
function makeOrange(){
    document.body.style.backgroundColor='Orange'
}


// Option 2
const btnMakeRed = document.getElementById('btn-color-red');
btnMakeRed.onclick = function makeRed(){
    document.body.style.backgroundColor='red';
}


document.getElementById('btn-color-green').addEventListener('click',
    function makeGreen(){
        document.body.style.backgroundColor='Green'
    }
)


    