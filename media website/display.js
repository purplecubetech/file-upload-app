const textBox = document.getElementById("textBox");
imgBox = document.getElementById("imgBox");
textBox.onkeyup = textBox.onkeypress = function() {
    document.getElementById("previewText").innerHTML = this.value;
}
function loadFile(e){
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(e.target.files[0]) + ")";
}
const myFile = document.getElementById("myFile");
myFile.addEventListener("change", loadFile(e));