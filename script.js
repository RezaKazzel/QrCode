function myFunction() {
  //document.getElementById("demo").innerHTML = "Hello World";
  alert("Hello World");
}

generateQR = () => {
const text = document.getElementById("text").value;
document.getElementById("img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240×240&data=" + text; 
}
