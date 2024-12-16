
function startAnimation() {
    document.getElementById('blur').classList.remove("animate");
    setTimeout(() => {
        document.getElementById('blur').classList.add("animate");
    }, 10);
}
function show() {
    document.getElementById("start_text1").style.display = "block";
}
function show2() {
    document.getElementById("start_text2").style.display = "block";
}
function show3() {
    document.getElementById("start_text3").style.display = "block";
}
function show4() {
    document.getElementById("start_text4").style.display = "block";
}


const input_text = document.getElementById("input_text");
var animacion = new Boolean(false);
var output_text = document.getElementById('output_text');
const start = "./Proyectos.UTU ";
const overlay = document.getElementById('fadeOverlay');

input_text.addEventListener("input", () => {
    const length = input_text.value.length;

    const chars = start.substring(0, length);

    input_text.value = chars;

    if (input_text.value == "./Proyectos.UTU ") {
        if (animacion != true) {
            animacion = true;
            input_text.value = "";
            output_text.innerHTML += "<br><br>./Proyectos.UTU";
            input_text.readOnly = !input_text.readOnly;
            setInterval(bucleMsg, 100);
            setTimeout(() => {
                startAnimation();
            }, 2000);
            setTimeout(() => {
                show();
            }, 6000);
            setTimeout(() => {
                show2();
            }, 8000);
            setTimeout(() => {
                show3();
            }, 10000);
            setTimeout(() => {
                show4();
            }, 12000);
            setTimeout(() => {
                overlay.classList.add('active');
            }, 14000);
            setTimeout(() => {
                window.location.href = '../cards/index.html';
            }, 16000);
        }
    }
});