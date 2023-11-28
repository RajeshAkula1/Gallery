var allImgs=document.images;
for (i=0;i<allImgs.length;i++)
{
    allImgs[i].src=`./Asset/images/img (${i+1}).jpg`
}
function closeImage(){
    document.getElementById("bigImg").style.display="none"
}
function closeEdit(){
    document.getElementById("editContainer").style.display="none"
}
var sourceImg;
function openImage(imgSrc)
{
    document.getElementById("bigImg").style.display="flex"
    sourceImg=imgSrc;
    document.getElementById("disImage").style.backgroundImage=`url("${imgSrc}")`
}
function editImage(){
    document.getElementById("editContainer").style.display="block"
    document.getElementById("imgCon").style.backgroundImage=`url("${sourceImg}")`
}
function changeValue(){
    // document.getElementById("imgCon").style.filter="blur(10px)"
    var blu=document.getElementById("blur").value;
    var bright=document.getElementById("brightness").value;
    var cont=document.getElementById("contrast").value;
    var grays=document.getElementById("grayscale").value;
    var inv=document.getElementById("invert").value;
    var opa=document.getElementById("opacity").value;
    var sat=document.getElementById("saturate").value;
    var sep=document.getElementById("sepia").value;
    var huer=document.getElementById("hue-rotate").value;
    document.getElementById("imgCon").style.filter=`blur(${blu}px) 
    brightness(${bright}%) 
    saturate(${sat}%) 
    contrast(${cont}%) 
    sepia(${sep}%) 
    invert(${inv}%) 
    hue-rotate(${huer}deg) 
    opacity(${opa}%) 
    grayscale(${grays}%)`
}
// function trasformValue()
// {
//     var 
// }